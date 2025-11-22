function HelloBtn2 () {

    const message = (name, event) => {
        alert("안녕 " + name + "//" + event.target.id +"!");
    };
    return (
        <>
        <button id="btn_2" onClick={(e) => {message("택민", e)}}>click</button>
        </>
    );
}

export default HelloBtn2;

