function CopyEvent() {
    const copyfunction = (e) => {
        alert("Copy Trigger!");
        console.log("Copy Trigger!", e)
    }
    return (
        <div className=" m-9 p-10 bg-lime-400 text-center text-black rounded-lg">
            <h3 style={{ fontSize: "28px" }} className=" text-amber-950">
                Try to select and Copy the below text
            </h3>
            <p onCopy={copyfunction}>
                This is the text when any user starts copy it will fire event
            </p>
        </div>
    );
}
export default CopyEvent;
