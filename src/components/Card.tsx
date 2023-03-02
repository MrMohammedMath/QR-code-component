export default function Card() {
    return (
        <div className="card">
            <img src="./images/qr-code.png" alt="qr code" className="card__img"/>
            <h2 className="card__title">Improve your front-end skills by building projects</h2>
            <p className="card__paragraph">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
    );
}