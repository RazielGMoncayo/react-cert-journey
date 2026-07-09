import { useParams } from "react-router-dom"

export default function TaskDetail() {

    const params = useParams()

    return(
        <main>
            <h1>Task {params.id}</h1>
        </main>
    )};
