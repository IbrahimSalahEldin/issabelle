import Container from "../common/Container"

const Copyrights = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div className="w-full py-5">
            <Container className="flex justify-center items-center">
                <p className="text-center text-sm">
                    &copy; Copyrights {currentYear}. All rights reserved.
                </p>
            </Container>
        </div>
    )
}

export default Copyrights
