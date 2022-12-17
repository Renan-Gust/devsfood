import { useEffect, useState } from "react"
import ReactTooltip from "react-tooltip"

import { CategoryItem } from "../../components/CategoryItem"
import { Header } from "../../components/Header"
import { Modal } from "../../components/Modal"
import { ModalProduct } from "../../components/ModalProduct"
import { ProductItem } from "../../components/ProductItem"

import { api } from "../../api"
import { CategoriesType } from "../../types/categories"
import { ProductsDataType } from "../../types/products"

import { CategoryArea, CategoryList, Container, ProductArea, ProductList, ProductPaginationArea, ProductPaginationItem } from './styled'

import foodAndRestaurant from '/assets/food-and-restaurant.png'

let searchTimer: any = null

export const HomeScreen = () => {
    const [headerSearch, setHeaderSearch] = useState('')
    const [categories, setCategories] = useState<CategoriesType[]>([])
    const [products, setProducts] = useState<ProductsDataType[]>([])
    const [totalPages, setTotalPages] = useState<number>(0)

    const [activeCategory, setActiveCategory] = useState<number>(0)
    const [activePage, setActivePage] = useState<number>(1)
    const [activeSearch, setActiveSearch] = useState<string>('')

    const [modalStatus, setModalStatus] = useState<boolean>(false)
    const [modalData, setModalData] = useState<ProductsDataType>({})

    async function getProducts() {
        const prods = await api.getProducts(activeSearch, activePage, activeCategory)
        if(!prods.error){
            setProducts(prods.result.data)
            setTotalPages(prods.result.pages)
            setActivePage(prods.result.page)
        }
    }

    useEffect(() => {
        clearTimeout(searchTimer)

        searchTimer = setTimeout(() => {
            setActiveSearch(headerSearch)
        }, 2000)
    }, [headerSearch])

    useEffect(() => {
        async function getCategories(){
            const cat = await api.getCategories()
            if(!cat.error){
                setCategories(cat.result)
            }

            ReactTooltip.rebuild()
        }
        
        getCategories()
    }, [])

    useEffect(() => {
        getProducts()
    }, [activeCategory, activePage, activeSearch])

    function handleProductClick(data: ProductsDataType){
        setModalData(data)
        setModalStatus(true)
    }

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />

            {categories.length > 0 &&
                <CategoryArea>
                    Selecione uma categoria

                    <CategoryList>
                        <CategoryItem
                            data={{
                                id: 0,
                                name: "Todas as categorias",
                                image: foodAndRestaurant 
                            }}
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                        />
                        {categories.map((category) => (
                            <CategoryItem 
                                key={category.id}
                                data={category}
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                            />
                        ))}
                    </CategoryList>
                </CategoryArea>
            }

            {products.length > 0 &&
                <ProductArea>
                    <ProductList>
                        {products.map((product) => (
                            <ProductItem
                                key={product.id}
                                data={product}
                                onClick={handleProductClick}
                            />
                        ))}
                    </ProductList>
                </ProductArea>
            }

            {totalPages > 0 &&
                <ProductPaginationArea>
                    
                    {Array(totalPages).fill(0).map((_, index) => (
                        <ProductPaginationItem 
                            key={index} 
                            active={activePage} 
                            current={index + 1}
                            onClick={() => setActivePage(index + 1)}
                        >
                            {index + 1}
                        </ProductPaginationItem>
                    ))}
                </ProductPaginationArea>
            }

            <Modal status={modalStatus} setStatus={setModalStatus}>
                <ModalProduct data={modalData} setStatus={setModalStatus} />
            </Modal>
        </Container>
    )
}