import "./styles.css";
import Card from '../Reusable/Card';

const Section = () => {

    return (
        <div className="container">
            <div className="first-part">
                <div>
                    <h1>ԻՆՉՊԵՍ ՕԳՏՎԵԼ</h1>
                    <h4>Ինչպե՞ս կատարել օնլայն գնումներ և ստանալ Հայաստանում արագ և ապահով</h4>
                </div>

                <div className="card-part">
                    <Card
                        text = "Գրանցվե՛ք մեր կայքում և անվճար ստացե՛ք առաքման հասցեներ"
                        imageUrl = "https://onex.am/img/svg/step1.svg"
                    />

                    <Card
                        text = "Օգտագործե՛ք Ձեզ տրամադրված առաքման հասցեները կայքերից գնումներ կատարելիս"
                        imageUrl="https://onex.am/img/svg/step2.svg"
                    />

                    <Card
                        text = "Ստացե՛ք Ձեր գնումները ՀՀ բոլոր քաղաքներում և Արցախում"
                        imageUrl = "https://onex.am/img/svg/step3.svg"
                    />
                </div>
            </div>

            <br />

            <div className="second-part">
                <div>
                    <h1>ԱՐՏԱՀԱՆՈՒՄ</h1>
                    <h4>Ուղարկե՛ք Ձեր փաստաթղթերը, ծանրոցները և բեռները <br /> ՀՀ-ից դեպի ԱՄՆ-ի և Ռուսաստանի ցանկացած հասցե</h4>
                </div>

                <div className="card-part">
                    <div className="second-card-part"> 
                        <Card
                            text = "Արտահանում ՀՀ-ից դեպի ԱՄՆ"
                            imageUrl = "https://onex.am/img/pages/export/export_usa_new.svg"
                        />
                    </div>

                    <div className="second-card-part"> 
                        <Card
                            text = "Արտահանում ՀՀ-ից դեպի Ռուսաստան"
                            imageUrl="https://onex.am/img/pages/export/export_russia_new.svg"
                        />
                    </div>
                    <div className="second-card-part"> 
                        <Card
                            text = "Փաստաթղթերի առաքում ՀՀ-ից դեպի աշխարհի ցանկացած կետ"
                            imageUrl = "https://onex.am/images/documents-export-small.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section;