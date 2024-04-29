

const CountryCard = ({country}) => {
    const {country_name, img, description} = country || {};
    return (
        <div className=" w-full cursor-pointer shadow-md border">
        <img src={img} alt="" />
        <div className="p-4">
        <h2 className="font-bold text-xl">{country_name}</h2>
        <p className="font-normal text-base">{description}</p>
        </div>
    </div>
    );
};

export default CountryCard;