export function formatter(price: number, isPromo: boolean) {
	const newFormato = new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	});

	const newPrice = newFormato.format(price).split(",");

	return isPromo ? (
		<>
			<span>
				{newPrice[0]},{newPrice[1]}
			</span>
			<p>
				{newPrice[0]},<span className="spanUpper">{newPrice[1]}</span>
			</p>
		</>
	) : (
		<p>
			{newPrice[0]},<span className="spanUpper">{newPrice[1]}</span>
		</p>
	);
}

export function newPrice(price: number) {
	const newFormato = new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	});

	const formatPrice = newFormato.format(price).split(",");

	return (
		<span>
			{formatPrice[0]},
			<span className="spanUpperPro">{formatPrice[1]}</span>{" "}
		</span>
	);
}
