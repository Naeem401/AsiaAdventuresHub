

const CountryCard = ({country}) => {
    const {country_name, img, description} = country || {};
    return (
        <div className=" w-full cursor-pointer p-4">
        <img src={img} alt="" />
        <div className="bg-gray-400">
        <h2>{country_name}</h2>
        <p>{description}</p>
        </div>
    </div>
    );
};

export default CountryCard;