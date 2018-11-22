import Presenter from "./Presenter";
import { compose } from "recompose";

const Column = compose(Presenter);
Column.displayName = "Column";

export default Column;
