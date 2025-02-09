// import Image from 'next/image';
import MapWrapper from '../components/Map';

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen">
        <h1 className='text-left ps-12 pt-4 pb-0 text-3xl font-bold'>Weather App</h1>
        <MapWrapper />
      </div>
    </>
  );
}
