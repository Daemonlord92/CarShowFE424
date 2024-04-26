import HandleMutation from "../helper/HandleMutation";
import { postNewCar } from "../api/car";
import CreateCar from "./CreateCar";

function CreateCarWrapper(props) {
    const mutation = HandleMutation(postNewCar)

    return <CreateCar {...props} mutation={mutation} />
}

export default CreateCarWrapper;