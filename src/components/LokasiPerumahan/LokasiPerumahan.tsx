import './LokasiPerumahan.tsx'

function LokasiPerumahan ({ data }: { data: any }) {
    // 1. Fungsi format harga ke Rupiah
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price)
    }

    // 2. Fungsi render bintang rating
    const renderStars = (rating: number) => {
        const stars = []
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 !== 0

        for (let i = 0; i < fullStars; i++) {
            stars.push(<i key={`full-${i}`} className="bi bi-star-fill text-warning"></i>)
        }
        if (hasHalfStar) {
            stars.push(<i key="half" className="bi bi-star-half text-warning"></i>)
        }
        return stars
    }

    return (
        <div className="card h-100 shadow-lg border-0 overflow-hidden">
            {/* Gambar Properti & Badge Status */}
            <div className="position-relative">
                <img
                    src={data.image}
                    className="card-img-top"
                    alt={data.name}
                    style={{ height: '250px', objectFit: 'cover' }}
                />
                {/* Badge Status */}
                <span className="position-absolute top-0 start-0 m-3 badge bg-success">
                    <i className="bi bi-check-circle-fill me-1"></i>{data.status}
                </span>
                {/* Tombol Favorite */}
                <button className="position-absolute top-0 end-0 m-3 btn btn-sm btn-light rounded-circle shadow-lg">
                    <i className="bi bi-heart"></i>
                </button>
            </div>

            <div className="card-body">
                {/* Judul & Lokasi */}
                <h5 className="card-title fw-bold mb-2">{data.name}</h5>
                <p className="text-muted mb-3">
                    <i className="bi bi-geo-alt-fill text-primary me-1"></i>
                    {data.location}, Indonesia
                </p>

                {/* Harga */}
                <div className="mb-3">
                    <h4 className="text-primary fw-bold mb-0">{formatPrice(data.price)}</h4>
                    <small className="text-muted">Harga mulai dari</small>
                </div>

                {/* Fasilitas Properti */}
                <div className="d-flex gap-3 mb-3 text-muted">
                    <small>
                        <i className="bi bi-house-door me-1"></i>{data.bedrooms} Kamar
                    </small>
                    <small>
                        <i className="bi bi-droplet me-1"></i>{data.bathrooms} K. Mandi
                    </small>
                    <small>
                        <i className="bi bi-rulers me-1"></i>{data.area} m²
                    </small>
                </div>

                {/* Deskripsi Singkat */}
                <p className="card-text text-muted small mb-3">
                    Hunian modern dengan desain minimalis, dilengkapi fasilitas lengkap dan akses mudah ke berbagai tempat strategis.
                </p>

                {/* Tombol Aksi */}
                <div className="d-grid gap-2">
                    <a href="#" className="btn btn-primary">
                        <i className="bi bi-eye me-2"></i>Lihat Detail
                    </a>
                    <a href="#" className="btn btn-outline-primary">
                        <i className="bi bi-telephone me-2"></i>Hubungi Sales
                    </a>
                </div>
            </div>

            {/* Card Footer dengan Rating */}
            <div className="card-footer bg-light border-0">
                <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">
                        <i className="bi bi-calendar3 me-1"></i>Posted 2 days ago
                    </small>
                    <div className="text-warning">
                        {renderStars(data.rating)}
                        <small className="text-muted ms-1">{data.rating}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LokasiPerumahan