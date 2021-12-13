import { Typography } from "@mui/material";
import GeneralLayout from "../GeneralLayout"

const Home = () => {
    return (
        <GeneralLayout>
            <>
                <Typography variant="h3" component="h1" gutterBottom>
                    Welcome!
                </Typography>
                <Typography variant="body1">
                    This is Sharefolio!
                </Typography>
            </>
        </GeneralLayout>
    )
}

export default Home;