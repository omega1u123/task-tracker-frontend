import DeskBody from "./deskBody/deskBody";
import DeskHeader from "./deskHeader/deskHeader";
import "./style.css"

export default function DeskComponent(){
    return(
        <div class="desk-container">
            <DeskHeader />
            <DeskBody />
        </div>
        
    )
}