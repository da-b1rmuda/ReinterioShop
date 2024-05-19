import React, { Component } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";

export class ReturnProductsPage extends Component {
    render() {
        return (
            <div class="Content">
                <div class="PageTitle">
                    <div class="PageTitleTextContainer">
                        <h1 class="PageTitleText">Возврат товара</h1>
                    </div>

                    <div class="PageTitleLine" />
                </div>

                <div>
                    <h3 style={{ lineHeight: "150%", fontSize: "24px" }}>Возврат товара надлежащего качества</h3>
                    <p style={{ lineHeight: "150%", fontSize: "20px" }}> Гарантийный срок исчисляется со дня передачи товара потребителю (дата, указанная в товаро-сопроводительных документах).<br />
                        Возврат товара надлежащего качества возможен в случае, если сохранены его товарный вид, потребительские свойства, а также документ, подтверждающий факт и условия покупки указанного товара.<br />
                        Возврат товара производится после согласования даты возврата. Покупатель не вправе отказаться от товара надлежащего качества, имеющего индивидуально-определенные свойства, если указанный товар может быть использован исключительно приобретающим его потребителем.<br />
                        Мебель бытовая надлежащего качества согласно п. 8 перечня непродовольственных товаров надлежащего качества, утвержденного Постановлением Правительства РФ от 19 января 1998 г. № 55, возврату или обмену на аналогичный товар других размера, формы, габарита, фасона, расцветки или комплектации не подлежит.<br />
                        При отказе покупателя от товара продавец должен возвратить ему сумму, уплаченную покупателем в соответствии с договором, за исключением расходов продавца на доставку от покупателя возвращенного товара, не позднее чем через 10 дней с даты предъявления покупателем соответствующего требования и передачи Потребителем точных платежных реквизитов лицевого счета Потребителя в кредитном учреждении, если денежные средства подлежат возврату по безналичному расчету.<br />
                        Стоимость расходов продавца на доставку от покупателя возвращенного товара надлежащего качества на склад продавца составляет 3 500 рублей.<br />
                        В случае если возврат суммы, уплаченной покупателем в соответствии с договором, осуществляется неодновременно с возвратом товара покупателем, возврат указанной суммы осуществляется продавцом с согласия покупателя одним из следующих способов:<br />
                        а. наличными денежными средствами по месту нахождения продавца;<br />
                        б. путем перечисления соответствующей суммы на банковский или иной счет покупателя, указанный покупателем.<br />
                        Покупатель вправе отказаться от товара в любое время до его передачи, а после передачи товара - в течение 7 дней после согласования с менеджером интернет-магазина.</p>

                    <h3 style={{ lineHeight: "150%", fontSize: "24px" }}>Возврат товара ненадлежащего качества</h3>
                    <p style={{ lineHeight: "150%", fontSize: "20px" }}>Недостаток/существенный недостаток Товара, возникший по причинам, за которые отвечает продавец, должен быть подтвержден со стороны продавца любым законным способом, например, предоставлением Потребителем продавцу фотографий обнаруженного недостатка либо при необходимости составлением двустороннего акта с участием представителя продавца.<br />
                        После подтверждения наличия недостатка в товаре по причинам, за которые отвечает продавец, потребитель которому продан товар ненадлежащего качества, вправе по своему выбору потребовать:<br />
                        а. безвозмездного устранения недостатков товара или возмещения расходов на их исправление потребителем или третьим лицом;<br />
                        б. соразмерного уменьшения покупной цены;<br />
                        в. замены на товар аналогичной марки (модели, артикула) или на такой же товар другой марки (модели, артикула) с соответствующим перерасчетом покупной цены. При этом в отношении технически сложных и дорогостоящих товаров эти требования потребителя подлежат удовлетворению в случае обнаружения существенных недостатков.<br />
                        Потребитель вместо предъявления требований, указанных выше вправе отказаться от исполнения договора и потребовать возврата уплаченной за товар суммы. По требованию продавца и за его счет потребитель должен возвратить товар с недостатками.<br />
                        Заявление о возврате товара и денежных средств заполняется потребителем и направляется в адрес продавца либо по его юридическому адресу, либо по адресу электронной почты менеджера Интернет-магазина.<br />
                        В случае если покупателю передается товар с нарушением условий договора, касающихся количества, ассортимента, комплектности, тары и (или) упаковки товара, потребитель может не позднее 20 дней после получения товара известить продавца об этих нарушениях.<br />
                        Если обнаружены недостатки товара, в отношении которого гарантийные сроки или сроки годности не установлены, потребитель вправе предъявить требования в отношении недостатков товара в разумный срок, но в пределах 2 лет со дня передачи его потребителю, если более длительные сроки не установлены законами или договором.<br />
                        Потребитель также вправе предъявить требования к продавцу в отношении недостатков товара, если они обнаружены в течение гарантийного срока.</p>
                </div>
                <Header />
                <Footer />
            </div>
        )
    }
}

export default ReturnProductsPage