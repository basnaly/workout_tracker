export default function DisplayRating({ rating }) {

    return (
        <div className="flex ms-2">
        {[1, 2, 3, 4, 5].map((star) => (
            <div key={star} className="">
                <div className=""> {rating >= star ? "⭐️" : "✩"}</div>
            </div>
            ))}
        </div>
    )
}