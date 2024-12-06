import React from 'react';
import { useSelector  , useDispatch} from 'react-redux';
import { decrement , increment} from '../redux/counter/CounterSlice';

const Main = () => {

    const images = ['/images/img1.png', '/images/img2.png', '/images/img3.png'];
    const count = useSelector(count => count.counter.counts)
    const dispatch = useDispatch()
    return (
        <div className="h-[94vh] flex items-center justify-center">
            <div className="container h-[90vh] w-[98vw] bg-lime-200 p-10 rounded-xl">
                <div className="items flex gap-4">
                    {images.map((src, index) => (
                        <div>
                            <img
                                key={index}
                                src={src}
                                alt={`Image ${index + 1}`}
                                className="h-[30vh]"
                            />
                            <div className="buttons flex gap-6 justify-center">
                                <button onClick={() => dispatch(decrement(src))}>-</button>
                                <p className="text-lg font-bold">
                                    {count[src] || 0}
                                </p>
                                <button onClick={() => dispatch(increment(src))} >+</button>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default Main;
