import SoloProject from "./SoloProject";
import TeamProject from "./TeamProject";

function ThirdComponent() {
    return (
        <>
            <div className='flex justify-center font-bold text-4xl mt-10 bg-slate-50 p-10'>
                <h1>Portfolio</h1>
            </div>
            <TeamProject />
            <SoloProject />
        </>
    );
}

export default ThirdComponent;
