const Spinner = () => {
    return ( 
        <>
            <div class="flex justify-center items-center">
                <div class="spinner-border animate-spin inline-block w-[300px] h-[300px] border-4 rounded-full" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
     );
}
 
export default Spinner;