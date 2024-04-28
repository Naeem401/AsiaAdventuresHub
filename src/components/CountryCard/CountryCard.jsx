

const CountryCard = ({country}) => {
    const {country_name, img, description} = country || {};
    return (
        <div className=" w-full cursor-pointer shadow-md border">
        <img src={img} alt="" />
        <div className=" bg-gray-50 p-4">
        <h2 className="font-bold text-xl text-black">{country_name}</h2>
        <p className="font-normal text-base text-black">{description}</p>
        </div>
    </div>
    );
};

export default CountryCard;