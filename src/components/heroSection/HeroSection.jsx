import { Typography } from '@material-tailwind/react'
import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';

function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <section
            style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : '#30336b' }}>

            {/* Hero Section  */}
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                {/* Main Content  */}
                <main>
                    <div className="text-center">
                        <div className="mb-2">
                            {/* Image  */}
                            <div className="flex justify-center">
                                <img src="https://firebasestorage.googleapis.com/v0/b/myblog-18989.appspot.com/o/371533275_1306926940014469_3715153406230975612_n.png?alt=media&token=7e7cfae7-34ed-4b84-bd2f-580ed85049e4" alt="" />
                            </div>

                            {/* Text  */}
                            <h1 className=' text-3xl text-orange font-bold'>Devknus</h1>
                        </div>

                        {/* Paragraph  */}
                        <p
                            style={{ color: mode === 'dark' ? 'white' : 'white' }}
                            className="sm:text-3xl text-xl font-extralight sm:mx-auto ">
                            Here are some blogs and tutorials contributed by Devknus.
                        </p>
                    </div>

                </main>
            </div>
        </section>
    )
}

export default HeroSection