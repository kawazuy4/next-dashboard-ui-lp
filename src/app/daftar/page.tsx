'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  nama: z.string().min(1).regex(/^[A-Za-z\s]+$/),
  tempatLahir: z.string().min(1),
  tanggalLahir: z.string(),
  jenisKelamin: z.enum(['Laki-laki', 'Perempuan']),
  agama: z.enum(['Islam', 'Kristen', 'Budha', 'Lainnya']),
  asalSekolah: z.string().min(1).regex(/^[A-Za-z\s]+$/),
  npsn: z.string().length(8).regex(/^\d+$/),
  nisn: z.string().length(10).regex(/^\d+$/),
  nomorIjazah: z.string().length(12).regex(/^\d+$/),
  nik: z.string().length(20).regex(/^\d+$/),
  alamat: z.string().min(1),
  kodePos: z.string().length(5).regex(/^\d+$/),
  rt: z.string().length(2).regex(/^\d+$/),
  rw: z.string().length(2).regex(/^\d+$/),
  kelurahan: z.string().min(1).regex(/^[A-Za-z\s]+$/),
  kecamatan: z.string().min(1).regex(/^[A-Za-z\s]+$/),
  kota: z.string().min(1).regex(/^[A-Za-z\s]+$/),
  noTelepon: z.string().length(11).regex(/^\d+$/),
  noWhatsapp: z.string().min(11).max(13).regex(/^\d+$/),
  alatTransportasi: z.string().min(1).regex(/^[A-Za-z\s]+$/),
  tempatTinggal: z.enum(['orang tua', 'wali', 'kost', 'asrama', 'panti asuhan', 'pesantren']),
  email: z.string().email(),
  penerimaKps: z.enum(['KIP', 'KIS', 'KKS']),
  noPenerima: z.string().length(16).regex(/^\d+$/),
  tinggiBadan: z.string().min(2).max(3).regex(/^\d+$/),
  beratBadan: z.string().min(2).max(3).regex(/^\d+$/),
  jarak: z.string().min(1),
  waktuTempuh: z.string().min(1),
  jumlahSaudara: z.string().min(1).max(2).regex(/^\d+$/),
  jenisPrestasi: z.string().optional(),
  tingkatPrestasi: z.enum(['kecamatan', 'kota/kabupaten', 'provinsi', 'nasional', 'internasional']).optional(),
  tahunPrestasi: z.string().optional(),

  beasiswa: z.string().optional(),
  sumberBeasiswa: z.string().optional(),
  tahunBeasiswa: z.string().optional(),

  // Ayah
  namaAyah: z.string().regex(/^[A-Za-z\s]+$/),
  tahunLahirAyah: z.string(),
  pekerjaanAyah: z.string(),
  pendidikanAyah: z.enum(['tidak ada', 'SD/Sederajat', 'SMP/Sederajat', 'SMA/Sederajat', 'D3', 'S1', 'S2', 'S3']),
  penghasilanAyah: z.string(),
  telpAyah: z.string().min(11).max(13).regex(/^\d+$/),

  // Ibu
  namaIbu: z.string().regex(/^[A-Za-z\s]+$/),
  tahunLahirIbu: z.string(),
  pekerjaanIbu: z.string(),
  pendidikanIbu: z.enum(['tidak ada', 'SD/Sederajat', 'SMP/Sederajat', 'SMA/Sederajat', 'D3', 'S1', 'S2', 'S3']),
  penghasilanIbu: z.string(),
  telpIbu: z.string().min(11).max(13).regex(/^\d+$/),

  // Wali
  namaWali: z.string().regex(/^[A-Za-z\s]+$/),
  tahunLahirWali: z.string(),
  pekerjaanWali: z.string(),
  pendidikanWali: z.enum(['tidak ada', 'SD/Sederajat', 'SMP/Sederajat', 'SMA/Sederajat', 'D3', 'S1', 'S2', 'S3']),
  penghasilanWali: z.string(),
  telpWali: z.string().min(11).max(13).regex(/^\d+$/),
});

type FormData = z.infer<typeof schema>;

const FormulirPendaftaran = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Data pendaftaran:", data);
    alert("Pendaftaran berhasil dikirim!");
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
  <h1 className="text-2xl font-bold">Formulir Pendaftaran Peserta Didik</h1>
  <a
    href="/"
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
  >
    Kembali ke Halaman Utama
  </a>
</div>

      

      <div className="border border-gray-300 rounded-lg p-6 shadow-sm bg-white space-y-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
          <label className="block mb-1 font-medium">Nama Calon Siswa</label>
          <input {...register("nama")} className="w-full border rounded px-3 py-2" />
          {errors.nama && <p className="text-red-600">{errors.nama.message}</p>}
        </div>

        <div className="flex gap-4">
                {/* Tempat Lahir */}
        <div className="w-1/2">
          <label className="block mb-1 font-medium">Tempat Lahir</label>
          <input {...register("tempatLahir")} className="w-full border rounded px-3 py-2" />
          {errors.tempatLahir && <p className="text-red-600">{errors.tempatLahir.message}</p>}
        </div>

        {/* Tanggal Lahir */}
        <div className="w-1/2">
          <label className="block mb-1 font-medium">Tanggal Lahir</label>
          <input type="date" {...register("tanggalLahir")} className="w-full border rounded px-3 py-2" />
          {errors.tanggalLahir && <p className="text-red-600">{errors.tanggalLahir.message}</p>}
        </div>

        </div>

        <div className="flex gap-4">
        {/* Jenis Kelamin */}
        <div className="w-1/2">
          <label className="block mb-1 font-medium">Jenis Kelamin</label>
          <select {...register("jenisKelamin")} className="w-full border rounded px-3 py-2">
            <option value="">Pilih</option>
            <option value="Laki-laki">Laki-laki</option>
            <option value="Perempuan">Perempuan</option>
          </select>
          {errors.jenisKelamin && <p className="text-red-600">{errors.jenisKelamin.message}</p>}
        </div>

        {/* Agama */}
        <div className="w-1/2">
          <label className="block mb-1 font-medium">Agama</label>
          <select {...register("agama")} className="w-full border rounded px-3 py-2">
            <option value="">Pilih</option>
            <option value="Islam">Islam</option>
            <option value="Kristen Protestan">Kristen Prostestan</option>
            <option value="Kristen Katolik">Kristen Katolik</option>
            <option value="Budha">Budha</option>
            <option value="Hindu">Hindu</option>
            <option value="Konghucu">Konghucu</option>
          </select>
          {errors.agama && <p className="text-red-600">{errors.agama.message}</p>}
        </div>
        </div>

        {/* Asal Sekolah */}
        <div>
          <label className="block mb-1 font-medium">Asal Sekolah</label>
          <input {...register("asalSekolah")} className="w-full border rounded px-3 py-2" />
          {errors.asalSekolah && <p className="text-red-600">{errors.asalSekolah.message}</p>}
        </div>

         <div className="flex gap-4">
        {/* NPSN */}
        <div className="w-1/2">
          <label className="block mb-1 font-medium">NPSN</label>
          <input type="text" maxLength={8} {...register("npsn")} className="w-full border rounded px-3 py-2" />
          {errors.npsn && <p className="text-red-600">{errors.npsn.message}</p>}
        </div>

        {/* NISN */}
        <div className="w-1/2">
          <label className="block mb-1 font-medium">NISN</label>
          <input type="text" maxLength={10} {...register("nisn")} className="w-full border rounded px-3 py-2" />
          {errors.nisn && <p className="text-red-600">{errors.nisn.message}</p>}
        </div>

        </div>

        {/* Nomor Seri Ijazah */}
        <div>
          <label className="block mb-1 font-medium">Nomor Seri Ijazah</label>
          <input type="text" maxLength={12} {...register("noIjazah")} className="w-full border rounded px-3 py-2" />
          {errors.noIjazah && <p className="text-red-600">{errors.noIjazah.message}</p>}
        </div>

        {/* NIK */}
        <div>
          <label className="block mb-1 font-medium">NIK</label>
          <input type="text" maxLength={20} {...register("nik")} className="w-full border rounded px-3 py-2" />
          {errors.nik && <p className="text-red-600">{errors.nik.message}</p>}
        </div>

         <div className="flex gap-4">
        {/* Alamat */}
        <div className="w-2/3">
          <label className="block mb-1 font-medium">Alamat</label>
          <textarea {...register("alamat")} className="w-full border rounded px-3 py-2" />
          {errors.alamat && <p className="text-red-600">{errors.alamat.message}</p>}
        </div>

        {/* Kode Pos */}
        <div className="w-1/3">
          <label className="block mb-1 font-medium">Kode Pos</label>
          <input type="text" maxLength={5} {...register("kodePos")} className="w-full border rounded px-3 py-2" />
          {errors.kodePos && <p className="text-red-600">{errors.kodePos.message}</p>}
        </div>
        </div>

        {/* RT */}
        <div className="flex gap-4">
        <div className="w-1/4">
          <label className="block mb-1 font-medium">RT</label>
          <input type="text" maxLength={2} {...register("rt")} className="w-full border rounded px-3 py-2" />
          {errors.rt && <p className="text-red-600">{errors.rt.message}</p>}
        </div>

        {/* RW */}
        <div className="w-1/4">
          <label className="block mb-1 font-medium">RW</label>
          <input type="text" maxLength={2} {...register("rw")} className="w-full border rounded px-3 py-2" />
          {errors.rw && <p className="text-red-600">{errors.rw.message}</p>}
        </div>

        {/* Kelurahan */}
        <div className="w-2/4">
          <label className="block mb-1 font-medium">Kelurahan</label>
          <input {...register("kelurahan")} className="w-full border rounded px-3 py-2" />
          {errors.kelurahan && <p className="text-red-600">{errors.kelurahan.message}</p>}
        </div>

        </div>

        {/* Kecamatan */}
        <div className="flex gap-4">
        <div className="w-2/4">
          <label className="block mb-1 font-medium">Kecamatan</label>
          <input {...register("kecamatan")} className="w-full border rounded px-3 py-2" />
          {errors.kecamatan && <p className="text-red-600">{errors.kecamatan.message}</p>}
        </div>

        {/* Kota */}
        <div className="w-2/4">
          <label className="block mb-1 font-medium">Kota</label>
          <input {...register("kota")} className="w-full border rounded px-3 py-2" />
          {errors.kota && <p className="text-red-600">{errors.kota.message}</p>}
        </div>
        </div>

        {/* No. Telepon */}
         <div className="flex gap-4">
        <div className="w-2/4">
          <label className="block mb-1 font-medium">No. Telepon</label>
          <input type="text" maxLength={11} {...register("telepon")} className="w-full border rounded px-3 py-2" />
          {errors.telepon && <p className="text-red-600">{errors.telepon.message}</p>}
        </div>

        {/* No. Whatsapp */}
        <div className="w-2/4">
          <label className="block mb-1 font-medium">No. Whatsapp</label>
          <input type="text" maxLength={13} {...register("whatsapp")} className="w-full border rounded px-3 py-2" />
          {errors.whatsapp && <p className="text-red-600">{errors.whatsapp.message}</p>}
        </div>
        </div>

         {/* Alat Transportasi */}
         <div className="flex gap-4">
        <div className="w-2/4">
          <label className="block mb-1 font-medium">Alat Transportasi</label>
          <input {...register("transportasi")} className="w-full border rounded px-3 py-2" />
          {errors.transportasi && <p className="text-red-600">{errors.transportasi.message}</p>}
        </div>

        {/* Tempat Tinggal */}
        <div className="w-2/4">
          <label className="block mb-1 font-medium">Tempat Tinggal</label>
          <select {...register("tempat_tinggal")} className="w-full border rounded px-3 py-2">
            <option value="">-- Pilih --</option>
            <option value="Orang Tua">Orang Tua</option>
            <option value="Wali">Wali</option>
            <option value="Kost">Kost</option>
            <option value="Asrama">Asrama</option>
            <option value="Panti Asuhan">Panti Asuhan</option>
            <option value="Pesantren">Pesantren</option>
          </select>
          {errors.tempat_tinggal && <p className="text-red-600">{errors.tempat_tinggal.message}</p>}
        </div>

        </div>

        {/* Email Pribadi */}
        <div>
          <label className="block mb-1 font-medium">Email Pribadi</label>
          <input type="email" {...register("email")} className="w-full border rounded px-3 py-2" />
          {errors.email && <p className="text-red-600">{errors.email.message}</p>}
        </div>

                {/* Penerima KPS */}
                <div className="flex gap-4">
        <div className="w-1/2">
          <label className="block mb-1 font-medium">Penerima KPS (KIP/KIS/KKS)</label>
          <select {...register("kps_jenis")} className="w-full border rounded px-3 py-2">
            <option value="">-- Pilih --</option>
            <option value="KIP">KIP</option>
            <option value="KIS">KIS</option>
            <option value="KKS">KKS</option>
          </select>
          {errors.kps_jenis && <p className="text-red-600">{errors.kps_jenis.message}</p>}
        </div>

        {/* Nomor KPS */}
        <div className="w-1/2">
          <label className="block mb-1 font-medium">Nomor KPS</label>
          <input {...register("no_kps")} className="w-full border rounded px-3 py-2" />
          {errors.no_kps && <p className="text-red-600">{errors.no_kps.message}</p>}
        </div>
        </div>

        {/* Tinggi Badan */}
         <div className="flex gap-4">
        <div className="w-1/2">
          <label className="block mb-1 font-medium">Tinggi Badan (cm)</label>
          <input {...register("tinggi_badan")} className="w-full border rounded px-3 py-2" />
          {errors.tinggi_badan && <p className="text-red-600">{errors.tinggi_badan.message}</p>}
        </div>

        {/* Berat Badan */}
        <div className="w-1/2">
          <label className="block mb-1 font-medium">Berat Badan (kg)</label>
          <input {...register("berat_badan")} className="w-full border rounded px-3 py-2" />
          {errors.berat_badan && <p className="text-red-600">{errors.berat_badan.message}</p>}
        </div>
        </div>

        {/* Jarak Rumah ke Sekolah */}
         <div className="flex gap-4">
        <div className="w-1/2">
          <label className="block mb-1 font-medium">Jarak ke Sekolah (km)</label>
          <input {...register("jarak")} className="w-full border rounded px-3 py-2" />
          {errors.jarak && <p className="text-red-600">{errors.jarak.message}</p>}
        </div>

        {/* Waktu Tempuh */}
        <div className="w-1/2">
          <label className="block mb-1 font-medium">Waktu Tempuh (menit)</label>
          <input {...register("waktu_tempuh")} className="w-full border rounded px-3 py-2" />
          {errors.waktu_tempuh && <p className="text-red-600">{errors.waktu_tempuh.message}</p>}
        </div>
        </div>

        {/* Jumlah Saudara Kandung */}
        <div>
          <label className="block mb-1 font-medium">Jumlah Saudara Kandung</label>
          <input {...register("jumlah_saudara")} className="w-full border rounded px-3 py-2" />
          {errors.jumlah_saudara && <p className="text-red-600">{errors.jumlah_saudara.message}</p>}
        </div>

        {/* Prestasi */}
        
        <div>
          <label className="block mb-1 font-medium">Jenis Prestasi</label>
          <input {...register("prestasi_jenis")} className="w-full border rounded px-3 py-2" />
          {errors.prestasi_jenis && <p className="text-red-600">{errors.prestasi_jenis.message}</p>}
        </div>

        <div className="flex gap-4">
        <div className="w-1/2">
          <label className="block mb-1 font-medium">Tingkat Prestasi</label>
          <select {...register("prestasi_tingkat")} className="w-full border rounded px-3 py-2">
            <option value="">-- Pilih --</option>
            <option value="Kecamatan">Kecamatan</option>
            <option value="Kabupaten/Kota">Kabupaten/Kota</option>
            <option value="Provinsi">Provinsi</option>
            <option value="Nasional">Nasional</option>
            <option value="Internasional">Internasional</option>
          </select>
          {errors.prestasi_tingkat && <p className="text-red-600">{errors.prestasi_tingkat.message}</p>}
        </div>
        <div className="w-1/2">
          <label className="block mb-1 font-medium">Tahun Prestasi</label>
          <input {...register("prestasi_tahun")} className="w-full border rounded px-3 py-2" />
          {errors.prestasi_tahun && <p className="text-red-600">{errors.prestasi_tahun.message}</p>}
        </div>
        </div>

        {/* Beasiswa */}
         <div className="flex gap-4">
        <div className="w-1/2">
          <label className="block mb-1 font-medium">Beasiswa</label>
          <input {...register("beasiswa")} className="w-full border rounded px-3 py-2" />
          {errors.beasiswa && <p className="text-red-600">{errors.beasiswa.message}</p>}
        </div>
        <div className="w-1/2">
          <label className="block mb-1 font-medium">Sumber Beasiswa</label>
          <input {...register("beasiswa_sumber")} className="w-full border rounded px-3 py-2" />
          {errors.beasiswa_sumber && <p className="text-red-600">{errors.beasiswa_sumber.message}</p>}
        </div>
        <div className="w-1/3">
          <label className="block mb-1 font-medium">Tahun Beasiswa</label>
          <input {...register("beasiswa_tahun")} className="w-full border rounded px-3 py-2" />
          {errors.beasiswa_tahun && <p className="text-red-600">{errors.beasiswa_tahun.message}</p>}
        </div>
        </div>

        {/* ==== DATA AYAH ==== */}
        <h2 className="text-lg font-semibold text-center mt-6">Data Ayah Kandung</h2>

        
        <div>
          <label className="block mb-1 font-medium">Nama Ayah</label>
          <input {...register("ayah_nama")} className="w-full border rounded px-3 py-2" />
          {errors.ayah_nama && <p className="text-red-600">{errors.ayah_nama.message}</p>}
        </div>

        <div className="flex gap-4">
        <div className="w-1/2">
          <label className="block mb-1 font-medium">Tahun Lahir Ayah</label>
          <input {...register("ayah_tahun_lahir")} className="w-full border rounded px-3 py-2" />
          {errors.ayah_tahun_lahir && <p className="text-red-600">{errors.ayah_tahun_lahir.message}</p>}
        </div>
        <div className="w-1/2">
          <label className="block mb-1 font-medium">Pekerjaan Ayah</label>
          <input {...register("ayah_pekerjaan")} className="w-full border rounded px-3 py-2" />
          {errors.ayah_pekerjaan && <p className="text-red-600">{errors.ayah_pekerjaan.message}</p>}
        </div>
        <div className="w-1/2">
          <label className="block mb-1 font-medium">Pendidikan Ayah</label>
          <select {...register("ayah_pendidikan")} className="w-full border rounded px-3 py-2">
            <option value="">-- Pilih --</option>
            <option value="Tidak Ada">Tidak Ada</option>
            <option value="SD/Sederajat">SD/Sederajat</option>
            <option value="SMP/Sederajat">SMP/Sederajat</option>
            <option value="SMA/Sederajat">SMA/Sederajat</option>
            <option value="D3">D3</option>
            <option value="S1">S1</option>
            <option value="S2">S2</option>
            <option value="S3">S3</option>
          </select>
          {errors.ayah_pendidikan && <p className="text-red-600">{errors.ayah_pendidikan.message}</p>}
        </div>
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
          <label className="block mb-1 font-medium">Penghasilan Ayah (Rp)</label>
          <input {...register("ayah_penghasilan")} className="w-full border rounded px-3 py-2" />
          {errors.ayah_penghasilan && <p className="text-red-600">{errors.ayah_penghasilan.message}</p>}
        </div>
        <div className="w-1/2">
          <label className="block mb-1 font-medium">No. Telp/HP Ayah</label>
          <input {...register("ayah_telepon")} className="w-full border rounded px-3 py-2" />
          {errors.ayah_telepon && <p className="text-red-600">{errors.ayah_telepon.message}</p>}
        </div>
        </div>

        {/* ==== DATA IBU ==== */}
        <h2 className="text-lg font-semibold text-center mt-6">Data Ibu Kandung</h2>

        <div>
          <label className="block mb-1 font-medium">Nama Ibu</label>
          <input {...register("ibu_nama")} className="w-full border rounded px-3 py-2" />
          {errors.ibu_nama && <p className="text-red-600">{errors.ibu_nama.message}</p>}
        </div>

        <div className="flex gap-4">
        <div className="w-1/2">
          <label className="block mb-1 font-medium">Tahun Lahir Ibu</label>
          <input {...register("ibu_tahun_lahir")} className="w-full border rounded px-3 py-2" />
          {errors.ibu_tahun_lahir && <p className="text-red-600">{errors.ibu_tahun_lahir.message}</p>}
        </div>
        <div className="w-1/2">
          <label className="block mb-1 font-medium">Pekerjaan Ibu</label>
          <input {...register("ibu_pekerjaan")} className="w-full border rounded px-3 py-2" />
          {errors.ibu_pekerjaan && <p className="text-red-600">{errors.ibu_pekerjaan.message}</p>}
        </div>
        <div className="w-1/2">
          <label className="block mb-1 font-medium">Pendidikan Ibu</label>
          <select {...register("ibu_pendidikan")} className="w-full border rounded px-3 py-2">
            <option value="">-- Pilih --</option>
            <option value="Tidak Ada">Tidak Ada</option>
            <option value="SD/Sederajat">SD/Sederajat</option>
            <option value="SMP/Sederajat">SMP/Sederajat</option>
            <option value="SMA/Sederajat">SMA/Sederajat</option>
            <option value="D3">D3</option>
            <option value="S1">S1</option>
            <option value="S2">S2</option>
            <option value="S3">S3</option>
          </select>
          {errors.ibu_pendidikan && <p className="text-red-600">{errors.ibu_pendidikan.message}</p>}
        </div>
        </div>

        <div className="flex gap-4">
    
        <div className="w-1/2">
          <label className="block mb-1 font-medium">Penghasilan Ibu (Rp)</label>
          <input {...register("ibu_penghasilan")} className="w-full border rounded px-3 py-2" />
          {errors.ibu_penghasilan && <p className="text-red-600">{errors.ibu_penghasilan.message}</p>}
        </div>
        <div className="w-1/2">
          <label className="block mb-1 font-medium">No. Telp/HP Ibu</label>
          <input {...register("ibu_telepon")} className="w-full border rounded px-3 py-2" />
          {errors.ibu_telepon && <p className="text-red-600">{errors.ibu_telepon.message}</p>}
        </div>
        </div>

        {/* ==== DATA WALI ==== */}
        <h2 className="text-lg font-semibold text-center mt-6">Data Wali</h2>

        <div>
          <label className="block mb-1 font-medium">Nama Wali</label>
          <input {...register("wali_nama")} className="w-full border rounded px-3 py-2" />
          {errors.wali_nama && <p className="text-red-600">{errors.wali_nama.message}</p>}
        </div>

        <div className="flex gap-4">
        <div className="w-1/2">
          <label className="block mb-1 font-medium">Tahun Lahir Wali</label>
          <input {...register("wali_tahun_lahir")} className="w-full border rounded px-3 py-2" />
          {errors.wali_tahun_lahir && <p className="text-red-600">{errors.wali_tahun_lahir.message}</p>}
        </div>
        <div className="w-1/2">
          <label className="block mb-1 font-medium">Pekerjaan Wali</label>
          <input {...register("wali_pekerjaan")} className="w-full border rounded px-3 py-2" />
          {errors.wali_pekerjaan && <p className="text-red-600">{errors.wali_pekerjaan.message}</p>}
        </div>
        <div className="w-1/2">
          <label className="block mb-1 font-medium">Pendidikan Wali</label>
          <select {...register("wali_pendidikan")} className="w-full border rounded px-3 py-2">
            <option value="">-- Pilih --</option>
            <option value="Tidak Ada">Tidak Ada</option>
            <option value="SD/Sederajat">SD/Sederajat</option>
            <option value="SMP/Sederajat">SMP/Sederajat</option>
            <option value="SMA/Sederajat">SMA/Sederajat</option>
            <option value="D3">D3</option>
            <option value="S1">S1</option>
            <option value="S2">S2</option>
            <option value="S3">S3</option>
          </select>
          {errors.wali_pendidikan && <p className="text-red-600">{errors.wali_pendidikan.message}</p>}
        </div>
        </div>

        <div className="flex gap-4">
        <div className="w-1/2">
          <label className="block mb-1 font-medium">Penghasilan Wali (Rp)</label>
          <input {...register("wali_penghasilan")} className="w-full border rounded px-3 py-2" />
          {errors.wali_penghasilan && <p className="text-red-600">{errors.wali_penghasilan.message}</p>}
        </div>
        <div className="w-1/2">
          <label className="block mb-1 font-medium">No. Telp/HP Wali</label>
          <input {...register("wali_telepon")} className="w-full border rounded px-3 py-2" />
          {errors.wali_telepon && <p className="text-red-600">{errors.wali_telepon.message}</p>}
        </div>
        </div>

        {/* Tombol Submit */}
        <div className="text-center pt-4">
          <button type="submit" className="bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700">
            Kirim Pendaftaran
          </button>
        </div>



      </form>
          </div>
    </div>
  );
};

export default FormulirPendaftaran;
