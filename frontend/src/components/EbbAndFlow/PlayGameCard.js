const PlayGameCard = () => {
  return (
    <div className=" bg-light-green-50">
      <div className=" min-h-screen">
        <div className="overflow-hidden text-center pt-20 rounded-full">
          <div className="overflow-hidden max-w-2xl w-full select-none h-[510px] relative isolate mx-auto">
            <div className="absolute w-full h-full -z-10">
              <span style={{ boxSizing: 'border-box', display: 'block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: '1', border: 0, margin: 0, padding: 0, position: 'absolute', top: '0', left: '0', bottom: '0', right: 0 }}>
                <img alt="bg" src="https://static.vecteezy.com/system/resources/thumbnails/002/178/674/small/lake-mountain-panorama-landscape-in-green-monochrome-flat-illustration-vector.jpg" decoding="async" data-nimg="fill" style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} sizes="100vw" srcset="https://static.vecteezy.com/system/resources/thumbnails/002/178/674/small/lake-mountain-panorama-landscape-in-green-monochrome-flat-illustration-vector.jpg" className="rounded-lg" />
              </span>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className="font-semibold text-2xl" style={{ opacity: 1 }}>Ebb and Flow</h1>
              <p className="text-black text-sm mt-4 mb-6" style={{ opacity: 1 }}>Train your task switching ability by shifting focus between where the leaves point and how they move<span className="text-black"> (works with both arrowkeys and gestures on mobile)</span>
              </p>
              <div className="text-xl gap-4 f-ai-c flex-wrap-reverse md:flex-nowrap">
                <button className="rounded-full border-4 border-white  hover:bg-opacity-90 transition-all active:scale-[1.02] text-white px-4 w-48  py-3" style={{ opacity: 1 }}>How To Play?</button>
                <button className="rounded-full bg-black border-4 hover:bg-opacity-90 transition-all active:scale-[1.02] text-white px-4 w-48 py-3" style={{ opacity: 1 }}>Play</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayGameCard;
