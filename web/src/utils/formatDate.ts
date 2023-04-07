export function formatDate(createdAt: Date) {
    const date = new Date(createdAt)

    const day = date.getDate().toString().padStart(2, "0")
    const month = date.getMonth().toString().padStart(2, "0")

    const formattedDate = `${day}/${month}/${date.getFullYear()}`

    return formattedDate
}