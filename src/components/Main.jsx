import { useChangeElements } from '../hooks/changeElements.js'

export function Main () {

    const { handleButtonNo, handleButtonYes, textP, image } = useChangeElements()

    return (
        <>
            <main className='max-w-3xl m-auto w-full h-screen text-center flex justify-center items-center'>

            <div className='flex justify-center items-center flex-col gap-2'>

    <h1 style={{ color: '#1E2333' }} className='font-sans font-bold text-black-400 text-2xl'> 
    Quieres ser mi San Valentin? </h1>

    <img src={image} className='w-72'/>

    <p style={{ color: '#4E212F' }} className='font-bold text-100'>{textP}</p>

    <section className='flex gap-3'>

        <button className='bg-purple-500 w-28 text-white font-bold py-2 px-4 rounded transition-all hover:scale-110' onClick={handleButtonYes}> Si </button>

        <button id='no' className='bg-pink-500 w-20 text-white font-bold py-2 px-4 rounded transition-all hover:scale-110' onClick={handleButtonNo}> No </button>
    </section>


</div>

</main>
        </>
    )
}