import { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false
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
        if (formData.password !== formData.confirmPassword) {
            alert('Konfirmasi kata sandi tidak cocok!')
            return
        }
        alert(`Pendaftaran berhasil untuk: ${formData.fullName}`)
    }

    return (
        <>
            {/* Register Card Form */}
            <div className="container mb-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                            <div className="row g-0">
                                {/* Left Side: Register Benefits / Image */}
                                <div className="col-lg-5 d-none d-lg-block position-relative bg-dark">
                                    <img
                                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&h=900&fit=crop"
                                        alt="Hunian Impian"
                                        className="w-100 h-100"
                                        style={{ objectFit: 'cover', opacity: 0.85 }}
                                    />
                                    <div className="position-absolute bottom-0 start-0 p-4 text-white">
                                        <div className="bg-primary bg-opacity-75 p-3 rounded-3 mb-3">
                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                <i className="bi bi-shield-check fs-4"></i>
                                                <h6 className="fw-bold mb-0">Jaminan Keamanan Data</h6>
                                            </div>
                                            <p className="small mb-0 text-white-50">
                                                Data pribadi Anda dilindungi enkripsi standar industri dan tidak disebarluaskan.
                                            </p>
                                        </div>
                                        <div className="d-flex gap-3">
                                            <div className="d-flex align-items-center gap-1">
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <span className="small">Rating 4.9/5</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-1">
                                                <i className="bi bi-people-fill text-light"></i>
                                                <span className="small">10rb+ Pengguna</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side: Register Form */}
                                <div className="col-lg-7 p-4 p-md-5 bg-white">
                                    <div className="text-center mb-4">
                                        <div className="bg-primary bg-opacity-10 text-white rounded-circle d-inline-flex p-3 mb-3">
                                            <i className="bi bi-person-plus-fill fs-1 px-2"></i>
                                        </div>
                                        <h3 className="fw-bold">Buat Akun Baru</h3>
                                        <p className="text-muted small">Lengkapi formulir di bawah ini untuk memulai langkah Anda</p>
                                    </div>

                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Nama Lengkap</label>
                                            <div className="input-group">
                                                <span className="input-group-text bg-white"><i className="bi bi-person"></i></span>
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    required
                                                    className="form-control"
                                                    placeholder="Nama lengkap Anda"
                                                    value={formData.fullName}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-md-6 mb-3 mb-md-0">
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
                                            <div className="col-md-6">
                                                <label className="form-label fw-semibold">No. Telepon / WhatsApp</label>
                                                <div className="input-group">
                                                    <span className="input-group-text bg-white"><i className="bi bi-whatsapp"></i></span>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        required
                                                        className="form-control"
                                                        placeholder="0812xxxxxxx"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-md-6 mb-3 mb-md-0">
                                                <label className="form-label fw-semibold">Kata Sandi</label>
                                                <div className="input-group">
                                                    <span className="input-group-text bg-white"><i className="bi bi-lock"></i></span>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        required
                                                        className="form-control"
                                                        placeholder="Minimal 8 karakter"
                                                        value={formData.password}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label fw-semibold">Konfirmasi Sandi</label>
                                                <div className="input-group">
                                                    <span className="input-group-text bg-white"><i className="bi bi-shield-lock"></i></span>
                                                    <input
                                                        type="password"
                                                        name="confirmPassword"
                                                        required
                                                        className="form-control"
                                                        placeholder="Ulangi kata sandi"
                                                        value={formData.confirmPassword}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-check mb-4">
                                            <input
                                                type="checkbox"
                                                id="agreeTerms"
                                                name="agreeTerms"
                                                required
                                                className="form-check-input"
                                                checked={formData.agreeTerms}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label small text-muted" htmlFor="agreeTerms">
                                                Saya menyetujui <a href="#terms" className="text-primary text-decoration-none">Syarat & Ketentuan</a> serta <a href="#privacy" className="text-primary text-decoration-none">Kebijakan Privasi</a> Griya MDP
                                            </label>
                                        </div>

                                        <button type="submit" className="btn btn-primary btn-lg w-100 fw-bold mb-3">
                                            <i className="bi bi-person-check-fill me-2"></i>Daftar Sekarang
                                        </button>

                                        <div className="text-center">
                                            <span className="text-muted small">Sudah memiliki akun? </span>
                                            <Link to="/login" className="small text-primary fw-bold text-decoration-none">
                                                Masuk Disini
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

export default Register
