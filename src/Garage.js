//하나의 파일 내에 여러가지 컴포넌트 선언 가능

function Car(props) {
    return (
        <h1>I am a {props.brand}</h1>
    );
}

function Car2(props) {
    return (
        <h1>I am a {props.brand.name}! ~~ {props.brand.model}</h1>
    );
}

function Car3(props) {
    return (
        <li>I am a {props.brand.name}! ~~ {props.brand.model}</li>
    );
}

function Car4(props) {
    return (
        <li>I am a {props.brand}</li>
    );
}

function Garage(props) {
    let carBrand = "Ford";
    let carInfo = {
        name : "Ford!"
        , model : "Mustang"
    };

    let temp_array = [1, 3, 6, 10];
    let temp_array2 = temp_array.map((x) => (x*2));

    console.log(JSON.stringify(temp_array2));

    let cars = ["Ford", "BMW", "Audi"];
    
    let array_car = [
        {id : 1, name:"ford"},
        {id : 2, name:"audi"},
        {id : 3, name:"honda"},
        {id : 4, name:"bmw"}
    ];

    return (
        <div>
            Who lives in my Garage
            <Car brand ="Ford"/>
            <Car brand={carBrand}/>
            <Car2 brand={carInfo}/>
            {cars.map((each) => <Car3 brand={each}/>)}
            {array_car.map((x) => <Car4 key={x.id} brand={x.name}/>)}
        </div>
    );
}

export default Garage;