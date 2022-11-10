import { useEffect } from "react"


const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - TrainerX`;
    }, [title])
}

export default useTitle;