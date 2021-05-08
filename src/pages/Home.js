import React, { Component } from "react";
import "../scss/Home.scss";

export default class Home extends Component {
    render() {
        return (
            <div id="home">
                <section>
                    <img
                        src="./../images/kiwi.jpg"
                        alt="kiwi"
                        className="curve"
                    />
                    <h2>What are the health benefits of kiwifruit?</h2>
                    <p>
                        The kiwifruit, or Chinese gooseberry, originally grew
                        wild in China. Kiwis are a nutrient-dense food — they
                        are rich in in nutrients and low in calories.
                    </p>
                    <p>
                        A schoolteacher introduced the fruitTrusted Source to
                        New Zealand in 1904, upon returning from China with
                        seeds. The New Zealanders called it “kiwi” after their
                        national bird.
                    </p>
                    <p>
                        Kiwi has a reputation as a health food because of its
                        high vitamin C content, but the fruit is also rich in
                        other nutrients. These may help reduce blood pressure,
                        boost wound healing, help maintain bowel health, and
                        more.
                    </p>
                </section>
            </div>
        );
    }
}
