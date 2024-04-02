
import { useContext } from "react"
import ColorTheme from "./ContextCollors"

const ContextB = () => {
    const {cont} = useContext(ColorTheme)

    return (
        <ColorTheme.Consumer>
            {
                (cor) => {
                    return (
                        <div>
                            <h1 style={{ backgroundColor: cor.bkgB }}>
                                Context B
                            </h1>
                        </div>
                    )
                }
            }
        </ColorTheme.Consumer>

    )
}

export default ContextB