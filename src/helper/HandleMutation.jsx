import { useMutation, useQueryClient } from "@tanstack/react-query"

function HandleMutation(Function) {
    const query = useQueryClient()
    const mutation = useMutation({
        mutationFn: Function,
        onSuccess: (data) => {
            alert(`Success: ${data}` )
            query.invalidateQueries()
        },
        onError:(error) => {
            alert(`Error: ${error}`)
        }  
        })

        return mutation
}

export default HandleMutation