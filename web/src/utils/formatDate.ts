export function formatDate(createdAt: Date) {
    const date = new Date(createdAt)

    const month = date.getMonth().toString().padStart(2, "0")

    const formattedDate = `${date.getDate()}/${month}/${date.getFullYear()}`

    return formattedDate
}