import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert(`Login berhasil untuk: ${formData.email}`)
    }

    return (
        <>
            {/* Login Card Form */}
            <div className="container mb-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                            <div className="row g-0">
                                {/* Left Side: Image / Promo */}
                                <div className="col-lg-6 d-none d-lg-block position-relative bg-dark">
                                    <img
                                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&h=800&fit=crop"
                                        alt="Rumah Idaman"
                                        className="w-100 h-100"
                                        style={{ objectFit: 'cover', opacity: 0.85 }}
                                    />
                                    <div className="position-absolute bottom-0 start-0 p-4 text-white">
                                        <span className="badge bg-primary mb-2">Member Eksklusif</span>
                                        <h4 className="fw-bold">Akses Penawaran & Diskon Spesial</h4>
                                        <p className="small text-white-50 mb-0">
                                            Dapatkan info unit perdana sebelum diluncurkan ke publik hanya untuk member terdaftar.
                                        </p>
                                    </div>
                                </div>

                                {/* Right Side: Login Form */}
                                <div className="col-lg-6 p-4 p-md-5 bg-white">
                                    <div className="text-center mb-4">
                                        <div className="bg-primary bg-opacity-10 text-white rounded-circle d-inline-flex p-3 mb-3">
                                            <i className="bi bi-person-fill-lock fs-1 px-2"></i>
                                        </div>
                                        <h3 className="fw-bold">Masuk ke Akun</h3>
                                        <p className="text-muted small">Silakan masukkan email dan kata sandi Anda</p>
                                    </div>

                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Email</label>
                                            <div className="input-group">
                                                <span className="input-group-text bg-white"><i className="bi bi-envelope"></i></span>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    className="form-control"
                                                    placeholder="nama@email.com"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <div className="d-flex justify-content-between">
                                                <label className="form-label fw-semibold">Kata Sandi</label>
                                                <a href="#forgot" className="small text-primary text-decoration-none">Lupa sandi?</a>
                                            </div>
                                            <div className="input-group">
                                                <span className="input-group-text bg-white"><i className="bi bi-lock"></i></span>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    required
                                                    className="form-control"
                                                    placeholder="••••••••"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="form-check mb-4">
                                            <input
                                                type="checkbox"
                                                id="rememberMe"
                                                name="rememberMe"
                                                className="form-check-input"
                                                checked={formData.rememberMe}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label small text-muted" htmlFor="rememberMe">
                                                Ingat saya di perangkat ini
                                            </label>
                                        </div>

                                        <button type="submit" className="btn btn-primary btn-lg w-100 fw-bold mb-3">
                                            <i className="bi bi-box-arrow-in-right me-2"></i>Masuk Sekarang
                                        </button>

                                        <div className="text-center">
                                            <span className="text-muted small">Belum memiliki akun? </span>
                                            <Link to="/register" className="small text-primary fw-bold text-decoration-none">
                                                Daftar Disini
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
