// App.js
function PasteEvent() {
    const pastefunction = () => {
        alert("Paste Event Triggered!");
    }
    return (
        <div style={{
            textAlign: "center",
            fontSize: "20px"
        }} className=" m-9 p-10 bg-lime-400 text-center text-black rounded-lg">
            <h2>Paste</h2>
            <input placeholder={"Paste content here..."}
                onPaste={pastefunction}
                style={{ padding: '10px', fontSize: "20px" }} />
        </div>
    );
}
export default PasteEvent;
