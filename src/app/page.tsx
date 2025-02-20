import MapWrapper from '../components/MapWrapper';

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen">
        <h1 className="ps-12 pt-8 text-left text-3xl font-bold">Weather App</h1>
        <MapWrapper />
      </div>
    </>
  );
}
