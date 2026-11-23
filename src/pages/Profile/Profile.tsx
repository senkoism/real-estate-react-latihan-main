import { useState } from 'react'
import { Link } from 'react-router-dom'
import LokasiPerumahan from '../../components/LokasiPerumahan/LokasiPerumahan'
import catImg from '../../assets/randomcat-andrew.png'

function Profile() {
    const [user, setUser] = useState({
        name: 'Arvin Fulviano Cahya',
        email: 'arvin.fulviano@example.com',
        phone: '+62 858-1984-5877',
        address: 'Jl. Segaran No. 140',
        occupation: 'Software Engineer',
        memberSince: 'April 30'
    })

    const [isEditing, setIsEditing] = useState(false)
    const [savedSuccess, setSavedSuccess] = useState(false)

    // Saved favorite housing items
    const favoriteProperties = [
        {
            id: 1,
            name: 'Griya Asri Residence',
            location: 'Jakarta Selatan',
            price: 850000000,
            bedrooms: 3,
            bathrooms: 2,
            area: 120,
            image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=400&fit=crop',
            rating: 4.5,
            status: 'Available',
        },
        {
            id: 2,
            name: 'Taman Indah Village',
            location: 'Tangerang',
            price: 650000000,
            bedrooms: 2,
            bathrooms: 1,
            area: 90,
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
            rating: 4.8,
            status: 'Available',
        }
    ]

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault()
        setIsEditing(false)
        setSavedSuccess(true)
        setTimeout(() => setSavedSuccess(false), 3000)
    }

    return (
        <>
            <div className="container mb-5">
                {savedSuccess && (
                    <div className="alert alert-success alert-dismissible fade show mb-4" role="alert">
                        <i className="bi bi-check-circle-fill me-2"></i>Profil Anda berhasil diperbarui!
                    </div>
                )}

                <div className="row g-4">
                    {/* Left Column: User Summary Card & Quick Links */}
                    <div className="col-lg-4">
                        <div className="card border-0 shadow-lg rounded-4 text-center p-4 mb-4">
                            <div className="card-body">
                                <div className="position-relative d-inline-block mb-3">
                                    <img
                                        src={catImg}
                                        className="rounded-circle shadowlg"
                                        style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                                    />
                                    <span className="position-absolute bottom-0 end-0 badge bg-success rounded-pill p-2">
                                        <i className="bi bi-patch-check-fill"></i>
                                    </span>
                                </div>
                                <h4 className="fw-bold mb-1">{user.name}</h4>
                                <p className="text-muted small mb-3">{user.occupation}</p>
                                <span className="badge bg-primary bg-opacity-10 text-white px-3 py-2 rounded-pill fw-semibold mb-4">
                                    Member Prioritas
                                </span>

                                <div className="border-top pt-3 text-start small">
                                    <div className="d-flex justify-content-between mb-2">
                                        <span className="text-muted">Bergabung:</span>
                                        <span className="fw-semibold">{user.memberSince}</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span className="text-muted">Properti Tersimpan:</span>
                                        <span className="fw-semibold">{favoriteProperties.length} Unit</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span className="text-muted">Status Akun:</span>
                                        <span className="text-success fw-semibold">Terverifikasi</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Action Navigation */}
                        <div className="card border-0 shadow-lg rounded-4 p-3">
                            <div className="list-group list-group-flush">
                                <a href="#info" className="list-group-item list-group-item-action border-0 d-flex align-items-center gap-3 py-3 text-primary fw-semibold">
                                    <i className="bi bi-person-circle fs-5"></i>
                                    <span>Informasi Akun</span>
                                </a>
                                <a href="#saved" className="list-group-item list-group-item-action border-0 d-flex align-items-center gap-3 py-3 text-secondary">
                                    <i className="bi bi-heart fs-5"></i>
                                    <span>Properti Favorit</span>
                                </a>
                                <a href="#settings" className="list-group-item list-group-item-action border-0 d-flex align-items-center gap-3 py-3 text-secondary">
                                    <i className="bi bi-shield-lock fs-5"></i>
                                    <span>Keamanan & Sandi</span>
                                </a>
                                <Link to="/contact" className="list-group-item list-group-item-action border-0 d-flex align-items-center gap-3 py-3 text-secondary">
                                    <i className="bi bi-headset fs-5"></i>
                                    <span>Bantuan & Konsultasi</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Detailed Account Information & Edit Form */}
                    <div className="col-lg-8">
                        <div className="card border-0 shadow-lg rounded-4 p-4 mb-4" id="info">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <div>
                                        <h4 className="fw-bold mb-1">Informasi Pribadi</h4>
                                        <p className="text-muted small mb-0">Kelola informasi kontak dan detail profil Anda</p>
                                    </div>
                                    <button
                                        type="button"
                                        className={`btn ${isEditing ? 'btn-outline-secondary' : 'btn-outline-primary'} btn-sm fw-semibold`}
                                        onClick={() => setIsEditing(!isEditing)}
                                    >
                                        <i className={`bi ${isEditing ? 'bi-x-lg' : 'bi-pencil-square'} me-1`}></i>
                                        {isEditing ? 'Batal' : 'Edit Profil'}
                                    </button>
                                </div>

                                <form onSubmit={handleSave}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">Nama Lengkap</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                disabled={!isEditing}
                                                value={user.name}
                                                onChange={(e) => setUser({ ...user, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">Pekerjaan</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                disabled={!isEditing}
                                                value={user.occupation}
                                                onChange={(e) => setUser({ ...user, occupation: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                disabled={!isEditing}
                                                value={user.email}
                                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">No. Telepon</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                disabled={!isEditing}
                                                value={user.phone}
                                                onChange={(e) => setUser({ ...user, phone: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label fw-semibold">Alamat Domisili</label>
                                            <textarea
                                                rows={2}
                                                className="form-control"
                                                disabled={!isEditing}
                                                value={user.address}
                                                onChange={(e) => setUser({ ...user, address: e.target.value })}
                                            ></textarea>
                                        </div>
                                    </div>

                                    {isEditing && (
                                        <div className="mt-4 text-end">
                                            <button type="submit" className="btn btn-primary fw-bold px-4">
                                                <i className="bi bi-check2-circle me-1"></i>Simpan Perubahan
                                            </button>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>

                        {/* Favorite Properties Section */}
                        <div id="saved" className="mb-4">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <div>
                                    <h4 className="fw-bold mb-1">Hunian Favorit Saya</h4>
                                    <p className="text-muted small mb-0">Daftar properti yang telah Anda simpan</p>
                                </div>
                                <Link to="/" className="btn btn-link text-primary text-decoration-none fw-semibold">
                                    Cari Lainnya <i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>

                            <div className="row g-3">
                                {favoriteProperties.map((housing) => (
                                    <div className="col-md-6" key={housing.id}>
                                        <LokasiPerumahan data={housing} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile