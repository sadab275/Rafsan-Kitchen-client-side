import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Rafsan's Kitchen`;

    }, [title])
}

export default useTitle;