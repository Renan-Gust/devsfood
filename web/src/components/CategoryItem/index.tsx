import { Dispatch, SetStateAction } from "react";

import { CategoriesType } from '../../types/categories';

import { Container, CategoryImage } from './styled'

interface CategoryItemProps {
    data: CategoriesType;
    activeCategory: number;
    setActiveCategory: Dispatch<SetStateAction<number>>;
}

export function CategoryItem({ data, activeCategory, setActiveCategory }: CategoryItemProps){
    function handleCategoryClick(){
        setActiveCategory(data.id)
    }

    return(
        <Container 
            active={activeCategory} 
            idCategory={data.id} 
            onClick={handleCategoryClick}
            data-tip={data.name}
            data-for="tip-top"
        >
            <CategoryImage src={data.image} />
        </Container>
    )
}