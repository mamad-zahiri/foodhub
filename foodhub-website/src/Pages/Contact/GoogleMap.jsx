const GoogleMap = () => {
    return (
        <section className=" max-w-6xl mx-auto mt-12 mb-14 px-4">
            <iframe
                className=" w-full h-80 mx-auto rounded-md"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15978.597765753811!2d-112.66819759077033!3d39.130919019930786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srestaurants!5e0!3m2!1sen!2s!4v1691490083058!5m2!1sen!2s"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </section>
    )
}

export default GoogleMap
