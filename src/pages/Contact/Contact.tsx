import { useState } from 'react'

function Contact() {
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <>
            {/* 1. Hero Section */}
            <section className="hero-section bg-primary text-white py-5 mb-5 rounded">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 mb-4 mb-lg-0">
                            <h1 className="display-5 fw-bold mb-3">Hubungi Griya MDP</h1>
                            <p className="lead mb-0">
                                Punya pertanyaan seputar hunian impian Anda atau ingin berkonsultasi mengenai investasi properti?
                                Tim konsultan profesional kami siap membantu Anda kapan pun.
                            </p>
                        </div>
                        <div className="col-lg-5 text-center text-lg-end">
                            <div className="bg-white bg-opacity-10 p-4 card rounded-25 d-inline-block text-start w-100">
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div className="bg-light text-primary rounded-circle py-3 px-4 d-inline-flex">
                                        <i className="bi bi-clock-history fs-3"></i>
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-bold text-primary">Jam Operasional</h6>
                                        <p className="small mb-0 text-primary">Senin - Sabtu: 08:00 - 17:00 WIB</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <div className="bg-light text-primary rounded-circle py-3 px-4 d-inline-flex">
                                        <i className="bi bi-headset fs-3"></i>
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-bold text-primary">Layanan Konsumen</h6>
                                        <p className="small mb-0 text-primary">Respon cepat dalam 24 jam</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Contact Info Cards */}
            <section className="contact-info-section mb-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card border-0 shadow-lg h-100 text-center p-4">
                                <div className="card-body">
                                    <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex p-3 mb-3">
                                        <i className="bi bi-geo-alt-fill fs-1 text-white px-2"></i>
                                    </div>
                                    <h5 className="card-title fw-bold">Kantor Pusat</h5>
                                    <p className="card-text text-muted">
                                        Jl. Rajawali No. 14, Ilir Timur, Palembang, Sumatera Selatan
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card border-0 shadow-lg h-100 text-center p-4">
                                <div className="card-body">
                                    <div className="bg-success bg-opacity-10 text-success rounded-circle d-inline-flex p-3 mb-3">
                                        <i className="bi bi-telephone-inbound-fill fs-1  text-white px-2"></i>
                                    </div>
                                    <h5 className="card-title fw-bold">Telepon & WhatsApp</h5>
                                    <p className="card-text text-muted mb-1">+62 812-3456-7890</p>
                                    <p className="card-text text-muted">+62 711-303030</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card border-0 shadow-lg h-100 text-center p-4">
                                <div className="card-body">
                                    <div className="bg-warning bg-opacity-10 text-warning rounded-circle d-inline-flex p-3 mb-3">
                                        <i className="bi bi-envelope-fill fs-1 text-white px-2"></i>
                                    </div>
                                    <h5 className="card-title fw-bold">Email Resmi</h5>
                                    <p className="card-text text-muted mb-1">info@griyamdp.com</p>
                                    <p className="card-text text-muted">support@griyamdp.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Form & Location Section */}
            <section className="contact-form-section py-5 bg-light mb-5 rounded">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="card border-0 shadow-lg p-4 rounded-4">
                                <div className="card-body">
                                    <h3 className="fw-bold mb-2">Kirim Pesan</h3>
                                    <p className="text-muted mb-4">
                                        Isi formulir di bawah ini untuk memulai percakapan dengan tim kami.
                                    </p>

                                    {submitted ? (
                                        <div className="alert alert-success d-flex align-items-center" role="alert">
                                            <i className="bi bi-check-circle-fill fs-4 me-2"></i>
                                            <div>
                                                Terima kasih! Pesan Anda telah terkirim. Tim konsultan kami akan segera menghubungi Anda.
                                            </div>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label className="form-label fw-semibold">Nama Lengkap</label>
                                                <div className="input-group">
                                                    <span className="input-group-text bg-white"><i className="bi bi-person"></i></span>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        required
                                                        className="form-control"
                                                        placeholder="contoh: Budi Santoso"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <div className="col-md-6 mb-3 mb-md-0">
                                                    <label className="form-label fw-semibold">Alamat Email</label>
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

                                            <div className="mb-3">
                                                <label className="form-label fw-semibold">Topik Pertanyaan</label>
                                                <select
                                                    name="subject"
                                                    className="form-select"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Pilih topik informasi properti</option>
                                                    <option value="konsultasi">Konsultasi Pemilihan Rumah</option>
                                                    <option value="survey">Jadwal Survey Lokasi</option>
                                                    <option value="kpr">Simulasi KPR & Finansial</option>
                                                    <option value="lainnya">Pertanyaan Umum Lainnya</option>
                                                </select>
                                            </div>

                                            <div className="mb-4">
                                                <label className="form-label fw-semibold">Pesan Anda</label>
                                                <textarea
                                                    name="message"
                                                    required
                                                    rows={4}
                                                    className="form-control"
                                                    placeholder="Tuliskan pertanyaan atau kebutuhan perumahan Anda..."
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>

                                            <button type="submit" className="btn btn-primary btn-lg w-100 fw-bold">
                                                <i className="bi bi-send-fill me-2"></i>Kirim Pesan Sekarang
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <h3 className="fw-bold mb-3">Kunjungi Galeri Marketing Kami</h3>
                            <p className="text-muted mb-4">
                                Kunjungi kantor pemasaran kami untuk melihat langsung maket perumahan dan berdiskusi langsung dengan konsultan arsitektur kami.
                            </p>
                            <div className="position-relative overflow-hidden rounded-4 shadow-lg mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
                                    alt="Marketing Gallery Griya MDP"
                                    className="img-fluid w-100"
                                    style={{ objectFit: 'cover', height: '320px' }}
                                />
                            </div>
                            <div className="p-3 bg-white rounded-3 shadow-lg border-start border-4 border-primary">
                                <h6 className="fw-bold mb-1"><i className="bi bi-info-circle-fill text-primary me-2"></i>Informasi Parkir</h6>
                                <p className="small text-muted mb-0">Tersedia area parkir luas gratis bagi calon pembeli dan keluarga.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
