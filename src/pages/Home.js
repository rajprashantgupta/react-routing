import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "../scss/Home.scss";

export default class Home extends Component {
    render() {
        return (
            <div id="home">
                <Row>
                    <Col md={4} sm={6}>
                        <img
                            src={"../assets/kiwi.png"}
                            alt="kiwi"
                            className="curve"
                        />
                        <h2>Kiwi fruit</h2>
                        <p>
                            Kiwifruit (commonly shortened to kiwi in North
                            America) or Chinese gooseberry is the edible berry
                            of several species of woody vines in the genus
                            Actinidia. The most common cultivar group of
                            kiwifruit (Actinidia deliciosa 'Hayward') is oval,
                            about the size of a large hen's egg: 5–8 cm in
                            length and 4.5–5.5 cm in diameter. It has a thin,
                            fuzzy, fibrous, tart but edible light brown skin and
                            light green or golden flesh with rows of tiny,
                            black, edible seeds. The fruit has a soft texture
                            with a sweet and unique flavour. In 2018, China
                            produced half of the world total of kiwifruit.
                        </p>
                        <p>
                            Kiwifruit is native to central and eastern China.
                            The first recorded description of the kiwifruit
                            dates to the 12th century during the Song dynasty.
                            In the early 20th century, cultivation of kiwifruit
                            spread from China to New Zealand, where the first
                            commercial plantings occurred. The fruit became
                            popular with British and American servicemen
                            stationed in New Zealand during World War II, and
                            later became commonly exported, first to Great
                            Britain and then to California in the 1960s.
                        </p>
                    </Col>
                    <Col md={4} sm={6}>
                        <img
                            src={"../assets/strawberry.png"}
                            alt="kiwi"
                            className="curve"
                        />
                        <h2>Strawberry</h2>
                        <p>
                            The first garden strawberry was grown in Brittany,
                            France, during the late 18th century. Prior to this,
                            wild strawberries and cultivated selections from
                            wild strawberry species were the common source of
                            the fruit.
                        </p>
                        <p>
                            Strawberry cultivars vary widely in size, color,
                            flavor, shape, degree of fertility, season of
                            ripening, liability to disease and constitution of
                            plant. On average, a strawberry has about 200 seeds
                            on its external membrane. Some vary in foliage, and
                            some vary materially in the relative development of
                            their sexual organs. In most cases, the flowers
                            appear hermaphroditic in structure, but function as
                            either male or female. For purposes of commercial
                            production, plants are propagated from runners and,
                            in general, distributed as either bare root plants
                            or plugs. Cultivation follows one of two general
                            models—annual plasticulture, or a perennial system
                            of matted rows or mounds. Greenhouses produce a
                            small amount of strawberries during the off season.
                        </p>
                    </Col>
                    <Col md={4} sm={6}>
                        <img
                            src={"../assets/mango.png"}
                            alt="kiwi"
                            className="curve"
                        />
                        <h2>Alphonso Mango</h2>
                        <h5>The King of Mangoes</h5>
                        <p>
                            The 'Alphonso' mango is a named mango cultivar that
                            originated in India.
                        </p>
                        <p>
                            he variety is named after Afonso de Albuquerque, a
                            Portuguese general and military expert who helped
                            establish Portuguese colonies in India. The
                            Portuguese introduced grafting on mango trees to
                            produce varieties like Alphonso. The Alphonso is
                            also one of the most expensive varieties of mango,
                            and is grown mainly in western India.
                        </p>
                        <p>
                            The Alphonso is a seasonal fruit, available
                            mid-April through the end of June. The fruits
                            generally weigh between 150 and 300 grams (5.3 and
                            10.6 oz), have a rich, creamy, tender texture and
                            delicate, non-fibrous, juicy pulp. As the fruit
                            matures, the skin of an Alphonso mango turns
                            golden-yellow with a tinge of red across the top of
                            the fruit.
                        </p>
                    </Col>
                </Row>
            </div>
        );
    }
}
