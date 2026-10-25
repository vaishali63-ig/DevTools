const Card = ({card})=>{
    return(
        <div className='p-4 rounded-sm w-[20rem] h-[12rem] shadow border border-zinc-100'>
            <div className="flex gap-2 justify-start items-centre">
                <img className="w-[2rem] h-[2rem]" src={card.cardLogo} alt="" />
                <p className="font-semibold">{card.title}</p>
            </div>
            <div className="flex justify-center items-center pt-3">
                <img className="h-[7rem] w-[15rem] rounded-lg shadow-lg" src={card.cardImage} alt="" />
            </div>
        </div>
    )
}

export default Card