import { useUser } from "@clerk/clerk-react";
import "../styles/Welcome.css";

function Welcome() {

    // Get the user's first name
    const { user } = useUser();
    if (!user) return null;

    // function to update the user's name
    // this function will wait until the onClick() event before updating the name
    const updateUser = async () => {
        await user.update({
            firstName: "John",
            lastName: "Doe",
        });
    }

    return <div>
        <div> Hello {user.firstName} {user.lastName} from Clerk!  </div>

        <div>
            <button className="update-user-btn" onClick={(updateUser)}> Click me to update your name
                <p> Current First and Last Name {user?.firstName} {user?.lastName}</p>
            </button>
        </div>
    </div>

}

export default Welcome;