const Shimmer = () => {
    return (
      <div className="flex flex-wrap m-4 p-4 bg-white" data-testid ="shimmer">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div key={index} className="w-64 h-56 bg-gray-300 m-5 shadow-lg border"></div>
          ))}
      </div>

      // <div class="bg-white rounded-lg shadow-lg m-4 p-4 flex flex-col">
      //   <div class="flex justify-between items-center mb-3">
      //     <div>
      //       <h3 class="font-bold text-xl">Shimeer Card</h3>
      //     </div>
      //     <div>
      //       <span class="px-2 py-1 text-sm font-semibold text-gray-600 bg-gray-200 rounded-md">$50</span>
      //     </div>
      //   </div>
      //   <div class="flex items-center mb-3">
      //     <div class="w-3/4">
      //       <p class="text-sm text-gray-600 font-semibold">Shimeer card is a prepaid card used to make online purchases.</p>
      //     </div>
      //     <div class="w-1/4">
      //       <img src="https://via.placeholder.com/100x100" class="rounded-full" alt="Shimeer Card" />
      //     </div>
      //   </div>
      // </div>
    );
  };
  
export default Shimmer;


