import PromotionManager from "./PromotionManager";

const Promotion = () => {
  return (
    <div className={`bg-[#E9ECF0] w-full h-full p-6`}>
      <div className="flex flex-col w-full bg-white min-h-[91vh] p-5">
        <h2 className="text-xl font-semibold">Create Promotion</h2>
        <PromotionManager />
      </div>
    </div>
  );
};

export default Promotion;
