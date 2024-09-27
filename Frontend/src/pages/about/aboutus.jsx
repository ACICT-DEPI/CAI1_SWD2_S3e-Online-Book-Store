

const Card = ({ title, children }) => {

    return (
        <div className="flex flex-col items-center justify-center h-96 bg-yellow-100 rounded-lg shadow-lg p-6 mx-4 my-8 transition-transform transform hover:scale-105">
            <h2 className="text-blue-600 text-2xl font-semibold mb-4">{title}</h2>
            <div className="text-blue-600">{children}</div>
        </div>
    );
};

const AboutUs = () => {
    
    return (
        <div className="flex flex-col items-center overflow-y-auto snap-y snap-mandatory h-screen">

            <div className="snap-start w-full">
                <Card title="Our Mission">
                    <p>
                        To bring people together through the joy of reading by offering a diverse range of books for everyone.
                    </p>
                </Card>
            </div>
            <div className="snap-start w-full">
                <Card title="Our Values">
                    <ul className="list-disc list-inside">
                        <li>Quality: We only offer high-quality books from trusted authors and publishers.</li>
                        <li>Community: We are committed to building a community of readers who share our passion.</li>
                        <li>Diversity: We celebrate diverse voices and perspectives in literature.</li>
                    </ul>
                </Card>
            </div>

            <div className="snap-start w-full">
                <Card title="Get in Touch">
                    <p>
                        We&apos;d love to hear from you! If you have any questions or feedback, feel free to reach out to us at 
                        <a href="mailto:contact@yourcompany.com" className="text-blue-400"> contact@yourcompany.com</a>.
                    </p>
                </Card>
            </div>
        </div>
    );
};

export default AboutUs;
