# Jalaranu: Struktur dan draft konten website

Bahasa: Indonesia  
Versi: 1.0 - draft untuk penyuntingan dan implementasi  
Identitas visual: **Jalaranu Vivid, tipografi serif**  
Dokumen pasangan: `content_en.md`

> **CATATAN EDITORIAL - bukan teks website.** Draft ini memakai posisi paling konservatif yang didukung percakapan: Jalaranu adalah proyek pengembangan konsep datacenter bawah danau. Tahap prototipe, lokasi, badan usaha, fasilitas operasional, hasil pengujian, pendanaan, izin, pelanggan, sertifikasi, dan kemitraan belum dikonfirmasi. Jangan menampilkan unsur tersebut sebagai pencapaian. Semua penanda `[KONFIRMASI: ...]` harus diselesaikan atau bagiannya dihilangkan sebelum publikasi. Paragraf di bawah label **Teks publik** adalah kandidat teks siap sunting; tabel struktur, arahan visual, dan catatan implementasi bukan konten publik.

## 01. Tujuan dan prinsip editorial

**Tujuan utama:** menghasilkan percakapan kemitraan yang relevan untuk pengembangan dan evaluasi Jalaranu.

**Audiens:** investor; pemerintah dan institusi pertahanan; mitra teknologi, infrastruktur, dan operasi; perguruan tinggi dan lembaga riset.

**Posisi merek:** teknologi berkarakter Indonesia, dengan argumen yang dapat diperiksa. Unsur budaya berada pada identitas; alasan investasi dan pemanfaatan berada pada bukti teknis, ekonomi, dan lingkungan.

**Nada:** jelas, tenang, berani, kolaboratif. Gunakan kalimat pendek dan istilah teknis hanya ketika membantu pembaca mengambil keputusan. Storytelling membuka konteks; bukti dan tahapan kerja menjelaskan kelayakan.

**Bahasa status:** bedakan konsep, rencana pengujian, simulasi, prototipe, hasil pengukuran, dan layanan operasional. Jangan menukar kata “target” menjadi “hasil”.

**Klaim yang tidak digunakan tanpa pembuktian:** paling aman; kebal sabotase; tanpa dampak lingkungan; pendinginan gratis; bebas emisi; efisiensi dengan persentase tertentu; military-grade; Tier III/IV certified; menjamin kedaulatan data; pertama di Indonesia/dunia.

## 02. Struktur situs tahap awal

Lima halaman utama, empat menu, satu tombol utama. Logo mengarah ke Beranda. Tidak ada megamenu atau portal pada tahap awal.

| ID | Halaman / menu | URL | Tujuan |
|---|---|---|---|
| H | Beranda, melalui logo | `/id/` | Memahami proyek, status, dan alasan menghubungi tim. |
| T | Teknologi | `/id/teknologi/` | Memahami konsep dan pertanyaan rekayasa yang harus dijawab. |
| V | Validasi | `/id/validasi/` | Menilai pendekatan pembuktian dan bukti yang tersedia. |
| P | Kemitraan | `/id/kemitraan/` | Memilih jalur kerja sama dan mengirim pertanyaan awal. |
| A | Tentang | `/id/tentang/` | Memahami identitas, tim, dan penanggung jawab. |
| U | Privasi, di footer | `/id/privasi/` | Menjelaskan pengelolaan data formulir setelah praktiknya ditetapkan. |

**Navigasi:** Teknologi · Validasi · Kemitraan · Tentang  
**Tombol utama:** Diskusikan Kemitraan → `/id/kemitraan/#kontak`  
**Pilihan bahasa:** ID / EN, menuju halaman pasangan yang setara.  
**Tautan tambahan footer:** Privasi · Kontak.

**Batas tahap awal:** jangan tampilkan menu Produk, Harga, Pelanggan, Karier, Berita, atau Unduh White Paper sebelum materi dan prosesnya tersedia. Tambahkan pusat publikasi ketika sudah ada hasil yang dapat diperbarui secara konsisten. Portal hanya dikembangkan ketika ada kebutuhan pengguna yang nyata.

## 03. Identitas visual dan penggunaan aset

Paket yang dipakai: `jalaranu-vivid-brand-pack.zip`. Gunakan versi serif, bukan paket DIN.

| Kebutuhan | Aset dalam folder `jalaranu-vivid/` |
|---|---|
| Logo horizontal pada latar terang | `jalaranu-vivid-horizontal-light.svg` |
| Logo horizontal pada latar gelap | `jalaranu-vivid-horizontal-dark.svg` |
| JALA: simbol: RANU pada latar terang | `jalaranu-vivid-split-light.svg` |
| JALA: simbol: RANU pada latar gelap | `jalaranu-vivid-split-dark.svg` |
| Susunan vertikal | `jalaranu-vivid-logo-light.svg` / `jalaranu-vivid-logo-dark.svg` |
| Simbol saja | `jalaranu-vivid-mark.svg` |

Setiap logo juga mempunyai PNG transparan dengan nama dasar yang sama. Horizontal dan split berukuran 4000 × 960 px; aset vertikal dan simbol berlebar 2200 px.

**Arahan:** horizontal menjadi susunan utama. Split digunakan sebagai elemen display di sampul, pembuka presentasi, atau area website yang cukup luas. Nama Jalaranu tetap satu kata dalam teks, metadata, tautan, dan label aksesibilitas.

Logo penuh memiliki detail ornamental. Pastikan detailnya terbaca pada ukuran tampil; jangan memaksanya menjadi favicon 16–32 px. Untuk header ponsel yang sempit, gunakan nama merek sebagai teks bila simbol tidak dapat ditampilkan dengan layak. Pengembangan favicon sederhana merupakan pekerjaan terpisah.

**Palet:** merah `#EF4136`, abu-abu `#77869B`, biru aksen `#008FBF`, teks gelap `#202C3C`, teks terang `#F1F5FA`, latar putih `#FFFFFF`, latar gelap `#101820`. Gunakan merah dan biru sebagai aksen; teks panjang memakai warna netral yang mudah dibaca. Uji kontras sesuai penggunaan aktual, termasuk tombol dan status.

**Tipografi website:** pertahankan wordmark serif sebagai outline. Untuk paragraf dan antarmuka gunakan sans-serif yang bersih dan mudah dibaca; tidak perlu meniru wordmark pada seluruh teks.

**Arahan visual utama:** diagram potongan sistem lebih penting daripada animasi dekoratif. Setiap render diberi label “Ilustrasi konsep”. Jangan menampilkan logo instansi, investor, pelanggan, atau sertifikasi sebagai dekorasi kepercayaan tanpa dasar dan izin penggunaannya.

## 04. Beranda: `/id/`

### H01: Pembuka

**Teks publik**

Label: Konsep datacenter bawah danau

# Infrastruktur komputasi bawah danau untuk ketahanan digital Indonesia.

Jalaranu mengembangkan konsep datacenter modular bawah danau. Fokusnya adalah menguji efisiensi termal, keandalan operasi, dan kelayakan penerapannya dalam konteks Indonesia.

Kami membuka ruang kolaborasi bagi investor, institusi, dan mitra teknologi untuk membangun dasar pengembangan yang terukur.

**CTA utama:** Diskusikan Kemitraan → `/id/kemitraan/#kontak`  
**CTA kedua:** Jelajahi Teknologi → `/id/teknologi/`

**Catatan editorial:** tambahkan satu baris status setelah tahap aktual dikonfirmasi: `[KONFIRMASI: tahap pengembangan dan tanggal pembaruan]`. Jangan gunakan angka kapasitas, countdown peluncuran, atau badge “operasional” tanpa dasar.

**Visual:** satu ilustrasi potongan yang menunjukkan permukaan danau, modul di bawah air, serta hubungan ke fasilitas darat. Caption: “Ilustrasi konsep. Konfigurasi akhir mengikuti hasil studi dan rekayasa.”

### H02: Alasan pengembangan

**Teks publik**

## Mengapa mempertimbangkan bawah danau?

Penempatan bawah danau menawarkan pendekatan yang berbeda terhadap pengelolaan panas, ruang fisik, dan akses ke infrastruktur. Manfaatnya perlu dinilai bersama konsekuensi pemasangan, pemeliharaan, konektivitas, dan pemulihan.

Pertanyaan utamanya: pada kondisi apa pendekatan ini lebih layak daripada datacenter darat dengan pendinginan berbasis air?

Jalaranu menempatkan perbandingan tersebut sebagai dasar evaluasi.

**Tiga fokus:**

- **Kinerja termal.** Menilai perpindahan panas dan kebutuhan energi pada kondisi lokasi dan beban yang ditentukan.
- **Keandalan operasi.** Menguji bagaimana sistem dipantau, dipelihara, dan dipulihkan ketika terjadi gangguan.
- **Kelayakan menyeluruh.** Membandingkan biaya sepanjang umur fasilitas serta tanggung jawab terhadap lingkungan.

**CTA:** Lihat Pendekatan Validasi → `/id/validasi/`

### H03: Gambaran sistem

**Teks publik**

## Satu sistem, dari darat hingga modul bawah danau.

Konsep Jalaranu menghubungkan fasilitas pendukung di darat dengan modul komputasi di bawah air. Perencanaan mencakup daya, konektivitas, pengelolaan panas, pemantauan, serta cara modul dipasang dan diambil kembali.

- **Fasilitas darat:** antarmuka daya, jaringan, dan pengelolaan operasi.
- **Hubungan darat–modul:** jalur daya dan komunikasi yang perlu dirancang bersama kebutuhan kontinuitas layanan.
- **Modul bawah danau:** wadah komputasi dan sistem pendukung yang akan dievaluasi melalui rekayasa dan pengujian.
- **Pemantauan dan pemulihan:** pengamatan kondisi sistem, penanganan gangguan, dan pengambilan kembali modul.

**CTA:** Pelajari Konsep Sistem → `/id/teknologi/#sistem`

### H04: Pendekatan pembuktian

**Teks publik**

## Kemajuan yang dinilai melalui bukti.

Setiap tahap pengembangan perlu menjawab pertanyaan yang spesifik: apakah kinerjanya sesuai kebutuhan, bagaimana sistem berperilaku saat gagal, berapa biaya operasinya, dan bagaimana dampaknya terhadap lingkungan dinilai?

Rencana pengujian, hasil pengukuran, dan keterbatasannya menjadi dasar keputusan untuk melanjutkan pengembangan.

**CTA:** Jelajahi Validasi → `/id/validasi/`

**Catatan editorial:** setelah ada bukti, tampilkan maksimal tiga kartu: nama pengujian, tanggal, hasil ringkas, metode, keterbatasan, tautan dokumen. Jika belum tersedia, gunakan teks di atas tanpa kartu pencapaian atau angka simulasi yang menyerupai hasil lapangan.

### H05: Jalur kemitraan

**Teks publik**

## Bangun tahap berikutnya bersama Jalaranu.

- **Investor:** menjajaki pendanaan berbasis milestone dan evaluasi model bisnis.
- **Pemerintah dan pertahanan:** membahas kebutuhan penggunaan, persyaratan evaluasi, dan kemungkinan pengembangan pilot.
- **Mitra industri:** mengeksplorasi kontribusi pada rekayasa, energi, jaringan, manufaktur, dan operasi.
- **Mitra riset:** menyusun metode pengujian dan kajian teknis, ekonomi, serta lingkungan.

**CTA:** Temukan Jalur Kemitraan → `/id/kemitraan/`

### H06: Penutup

**Teks publik**

## Apa yang perlu dibuktikan agar konsep ini relevan bagi organisasi Anda?

Mari mulai dari kebutuhan, ruang lingkup evaluasi, dan kontribusi yang dapat dibangun bersama.

**CTA:** Diskusikan Kemitraan → `/id/kemitraan/#kontak`

## 05. Teknologi: `/id/teknologi/`

### T01: Pembuka

**Teks publik**

# Rekayasa yang dimulai dari pertanyaan yang tepat.

Jalaranu mengeksplorasi datacenter bawah danau sebagai satu sistem utuh. Penempatan modul perlu dievaluasi bersama daya, jaringan, pengelolaan panas, pemeliharaan, dan pemulihannya.

### T02: Arsitektur konsep `{#sistem}`

**Teks publik**

## Dari antarmuka darat ke lingkungan bawah air.

Konsep arsitektur mencakup empat bagian: fasilitas pendukung darat, jalur daya dan komunikasi, modul komputasi, serta sistem pemantauan dan pengelolaan operasi. Keterkaitan antarbagiannya menentukan bagaimana keseluruhan fasilitas dapat bekerja dan dipulihkan.

Visualisasi awal menggunakan bentuk limas segi empat terpancung. Bentuk tersebut merupakan eksplorasi desain; geometri, material, dan spesifikasi akhir mengikuti hasil rekayasa serta pengujian.

**Visual:** diagram blok dan potongan, dengan jalur logis tanpa koordinat atau rincian pengamanan fasilitas.

### T03: Pertanyaan rekayasa

**Teks publik**

## Lima bidang yang perlu dievaluasi.

1. **Pengelolaan panas:** kondisi air, perpindahan panas, beban komputasi, dan energi yang diperlukan sistem pendukung.
2. **Integritas modul:** kemampuan struktur, sambungan, serta antarmuka sistem menghadapi kondisi operasi yang ditetapkan.
3. **Daya dan konektivitas:** kebutuhan layanan, pilihan redundansi, perilaku ketika jalur terganggu, dan prosedur pemulihan.
4. **Pemeliharaan:** apa yang dapat dipantau dari jarak jauh, kapan intervensi diperlukan, serta bagaimana modul ditangani atau diangkat.
5. **Keamanan dan kendali:** akses administratif, pemantauan kejadian, pengelolaan kunci, tanggung jawab operator, serta perlindungan antarmuka fisik dan digital.

### T04: Perbandingan alternatif

**Teks publik**

## Keunggulan harus dinilai terhadap alternatif yang relevan.

Evaluasi perlu membandingkan konsep bawah danau dengan solusi darat pada kebutuhan layanan, beban, dan asumsi yang setara. Perbandingan mencakup fasilitas darat dengan pendinginan konvensional maupun pendinginan berbasis air, bila relevan untuk lokasi yang dikaji.

Aspek penilaian meliputi energi, biaya investasi, biaya operasi, pemeliharaan, konektivitas, pemulihan, dampak lingkungan, dan akhir masa pakai. Potensi penghematan pada satu komponen tidak dengan sendirinya menunjukkan biaya total yang lebih rendah.

### T05: Skenario penggunaan yang dieksplorasi

**Teks publik**

Konsep ini dapat dievaluasi untuk komputasi khusus, penyimpanan, atau kebutuhan infrastruktur tertentu berdasarkan persyaratan organisasi. Kesesuaian setiap skenario harus ditentukan melalui evaluasi kebutuhan dan bukti pengujian.

Penyebutan skenario penggunaan bukan pernyataan bahwa layanan tersebut sudah tersedia atau telah disetujui untuk menangani data sensitif.

**CTA:** Bahas Kebutuhan Teknis → `/id/kemitraan/#kontak`

## 06. Validasi: `/id/validasi/`

### V01: Pembuka

**Teks publik**

# Bukti menjadi dasar untuk melangkah.

Kelayakan datacenter bawah danau perlu dinilai secara teknis, ekonomi, dan lingkungan. Pendekatan validasi Jalaranu berfokus pada pertanyaan yang dapat diuji, metode yang dapat dijelaskan, serta hasil yang disampaikan bersama batasannya.

### V02: Status pengembangan

**Catatan editorial - wajib dikonfirmasi:** tampilkan tahap aktual, tanggal pembaruan, dan dokumen pendukung jika tersedia. Jangan otomatis menandai tahap awal sebagai selesai. Bila status belum terverifikasi, jangan publikasikan timeline pencapaian.

**Template teks publik setelah dikonfirmasi:**

- Tahap saat ini: `[KONFIRMASI: tahap aktual]`.
- Fokus tahap ini: `[KONFIRMASI: lingkup pekerjaan yang sedang berjalan]`.
- Pembaruan terakhir: `[KONFIRMASI: tanggal]`.
- Bukti yang dapat dibagikan: `[KONFIRMASI: dokumen atau hasil yang boleh dipublikasikan]`.

### V03: Rencana evaluasi

**Teks publik**

## Pertanyaan yang membentuk rencana pengujian.

| Bidang | Pertanyaan evaluasi |
|---|---|
| Termal dan energi | Bagaimana sistem bekerja pada rentang beban dan kondisi lingkungan yang ditetapkan? |
| Struktur dan integritas | Apakah modul serta antarmukanya memenuhi kondisi operasi dan pengujian yang ditentukan? |
| Keandalan dan pemulihan | Bagaimana sistem merespons gangguan, dipulihkan, dan dipelihara? |
| Biaya sepanjang umur fasilitas | Bagaimana biaya pemasangan, operasi, intervensi, pengambilan kembali, dan akhir masa pakai dibanding alternatif? |
| Lingkungan | Bagaimana kondisi awal didokumentasikan, perubahan dipantau, dan hasilnya dievaluasi? |
| Kesesuaian penggunaan | Untuk kebutuhan dan tingkat layanan apa hasil pengujian menunjukkan kecocokan? |

Kriteria keberhasilan, metode, dan tanggung jawab perlu ditetapkan sebelum pengujian dimulai.

### V04: Kerangka menuju pilot

**Teks publik**

## Pengembangan bertahap, dengan keputusan pada setiap tahap.

1. **Perumusan kebutuhan:** menetapkan tujuan, alternatif pembanding, dan kriteria keberhasilan.
2. **Studi dan rekayasa awal:** menilai lokasi yang layak dikaji, risiko, rancangan sistem, serta asumsi biaya.
3. **Pengujian komponen dan integrasi:** menguji fungsi yang menentukan keselamatan dan kinerja sistem.
4. **Pilot terbatas:** mengukur kinerja pada lingkup yang disepakati, dengan rencana pemantauan dan pemulihan.
5. **Evaluasi untuk tahap berikutnya:** menilai hasil, kekurangan, dan kelayakan pengembangan lebih lanjut.

Urutan ini adalah kerangka pengembangan, bukan daftar tahap yang dinyatakan telah selesai.

### V05: Lingkungan dan tanggung jawab

**Teks publik**

## Danau adalah lingkungan yang harus dipahami.

Kajian lokasi perlu mempertimbangkan kondisi perairan, penggunaan kawasan, kebutuhan masyarakat terkait, serta persyaratan yang berlaku. Rencana evaluasi harus mencakup kondisi awal, perubahan yang dipantau selama pengujian, dan penanganan fasilitas pada akhir masa pakai.

Hasil kajian menjadi masukan untuk keputusan lokasi dan desain, termasuk keputusan untuk tidak melanjutkan suatu opsi bila tidak layak.

### V06: Ringkasan hasil dan dokumen

**Catatan editorial:** aktifkan bagian ini hanya ketika dokumen tersedia. Setiap entri memuat judul, jenis bukti, tanggal, versi, penanggung jawab, metode, temuan, keterbatasan, dan akses publik/terbatas. Simulasi harus disebut simulasi; laporan mitra tidak boleh disajikan sebagai sertifikasi. Jangan memasang tombol unduh tanpa berkas.

**CTA yang selalu dapat dipakai:** Diskusikan Program Validasi → `/id/kemitraan/#kontak`

## 07. Kemitraan: `/id/kemitraan/`

### P01: Pembuka

**Teks publik**

# Mulai dari kebutuhan. Sepakati apa yang perlu dibuktikan.

Jalaranu membuka percakapan dengan pihak yang ingin menilai, mengembangkan, atau mendukung konsep datacenter bawah danau. Kerja sama dimulai dengan tujuan yang jelas, lingkup yang realistis, dan hasil yang dapat dievaluasi.

### P02: Investor `{#investor}`

**Teks publik**

## Pendanaan yang dikaitkan dengan kemajuan terukur.

Kami mengundang pembahasan tentang kebutuhan pasar, model bisnis, tahapan pendanaan, dan bukti yang perlu dihasilkan pada setiap tahap. Fokus awalnya adalah memahami bagaimana modal dapat digunakan untuk mengurangi ketidakpastian pengembangan.

Ruang pembahasan mencakup calon pengguna, alternatif yang tersedia, estimasi biaya beserta asumsi, kebutuhan modal, serta milestone untuk keputusan investasi berikutnya.

**CTA:** Bahas Peluang Investasi → `#kontak` - pilihan awal formulir: Investor.

**Catatan editorial:** sebelum pendekatan investasi formal, siapkan ringkasan model pendapatan, pelanggan sasaran, dasar estimasi pasar, penggunaan dana, cap table bila relevan, dan skenario biaya. Jangan mengarang traction, valuasi, return, atau komitmen investasi. Tombol ini mengundang diskusi, bukan menyatakan penawaran investasi publik.

### P03: Pemerintah dan institusi pertahanan `{#institusi}`

**Teks publik**

## Evaluasi kebutuhan strategis melalui kerja sama yang terarah.

Pembahasan dapat dimulai dari kebutuhan infrastruktur, kontinuitas layanan, kendali operasional, tata kelola data, dan kriteria evaluasi institusi. Kesesuaian konsep Jalaranu ditentukan melalui kajian kebutuhan dan pengujian yang relevan.

Kemungkinan ruang kerja sama mencakup studi kelayakan, penyusunan kebutuhan, dan pengembangan pilot terbatas. Persyaratan akses, penanganan informasi, serta tanggung jawab masing-masing pihak disepakati sesuai lingkup kerja sama.

**CTA:** Jajaki Kerja Sama Institusi → `#kontak` - pilihan awal formulir: Pemerintah / institusi pertahanan.

**Catatan editorial:** jangan menyiratkan penunjukan, dukungan, kontrak, persetujuan keamanan, atau jalur pengadaan khusus. Logo dan nama institusi hanya dicantumkan sesuai hubungan nyata dan izin publikasi.

### P04: Mitra industri `{#industri}`

**Teks publik**

## Menghubungkan kemampuan rekayasa, infrastruktur, dan operasi.

Kami membuka pembahasan dengan calon mitra di bidang energi, konektivitas, struktur dan manufaktur, komputasi, pengelolaan panas, sensor, serta operasi lapangan.

Kontribusi dapat dibahas berdasarkan kebutuhan pengembangan, batas antarmuka, tanggung jawab integrasi, serta hasil pengujian yang ingin dicapai bersama.

**CTA:** Bahas Kontribusi Teknologi → `#kontak` - pilihan awal formulir: Mitra industri / teknologi.

### P05: Mitra riset `{#riset}`

**Teks publik**

## Mengembangkan metode dan bukti yang dapat ditinjau.

Perguruan tinggi dan lembaga riset dapat menjajaki kajian termal, struktur, keandalan, ekonomi, serta lingkungan. Ruang lingkup penelitian, penggunaan data, publikasi, dan hak atas hasil perlu disepakati sejak awal.

**CTA:** Jajaki Kolaborasi Riset → `#kontak` - pilihan awal formulir: Mitra riset.

### P06: Alur penjajakan

**Teks publik**

## Dari percakapan awal ke lingkup kerja bersama.

1. Sampaikan kebutuhan dan tujuan organisasi Anda.
2. Bahas kesesuaian serta informasi awal yang dapat dibagikan.
3. Rumuskan ruang lingkup, kontribusi, dan kriteria evaluasi.
4. Tentukan langkah berikutnya berdasarkan kesiapan kedua pihak.

### P07: Formulir kontak `{#kontak}`

**Teks publik**

## Ceritakan kebutuhan organisasi Anda.

Sampaikan konteks singkat dan bentuk kerja sama yang ingin dijajaki. Jangan menyertakan informasi rahasia, kredensial, data operasional sensitif, atau dokumen terbatas dalam formulir ini.

| Elemen | Label / teks |
|---|---|
| Nama, wajib | Nama lengkap |
| Organisasi, wajib | Nama organisasi |
| Email, wajib | Email yang dapat dihubungi |
| Jenis kerja sama, wajib | Investor / Pemerintah atau institusi pertahanan / Mitra industri atau teknologi / Mitra riset / Lainnya |
| Pesan, wajib | Kebutuhan dan tujuan kerja sama |
| Placeholder pesan | Jelaskan kebutuhan, kontribusi yang dapat ditawarkan, atau pertanyaan awal Anda. |
| Tautan penjelasan data | Pelajari pengelolaan data kontak Anda dalam Pemberitahuan Privasi. |
| Tombol kirim | Kirim Permintaan Diskusi |

**Teks bantuan:** Tidak perlu menyertakan rincian teknis sensitif pada tahap awal.

**Sukses, hanya setelah pengiriman berhasil:** Terima kasih. Permintaan diskusi Anda telah diterima. Tim Jalaranu akan meninjau informasi yang Anda kirimkan.

**Gagal:** Permintaan belum terkirim. Silakan coba lagi atau hubungi `[KONFIRMASI: email kontak publik]`.

**Validasi kolom:** Lengkapi kolom ini. / Masukkan alamat email yang valid.

**Catatan implementasi:** tidak ada unggahan file atau kolom telepon wajib pada tahap awal. Jangan menjanjikan waktu respons tertentu sebelum prosesnya tersedia. Jangan menampilkan pesan sukses hanya berdasarkan klik. Jangan memasang formulir aktif sebelum penanggung jawab, tujuan pemrosesan, akses, retensi, dan pemberitahuan privasinya ditetapkan. Bila belum siap, gunakan kontak email yang sudah dikonfirmasi sebagai jalur sementara. Pemberitahuan privasi perlu ditinjau berdasarkan praktik nyata; draft ini bukan dokumen kepatuhan final.

## 08. Tentang: `/id/tentang/`

### A01: Pembuka

**Teks publik**

# Berakar pada identitas Indonesia. Dibangun melalui pembuktian.

Jalaranu adalah inisiatif pengembangan konsep datacenter bawah danau. Kami ingin mempertemukan rekayasa, kebutuhan infrastruktur, serta pemahaman terhadap lingkungan dalam satu proses pengembangan yang terukur.

### A02: Cerita nama dan simbol

**Teks publik**

## Pengetahuan yang dijaga.

Nama Jalaranu menggabungkan “jala”, yang dimaknai sebagai air dalam penamaan brand ini, dan “ranu”, danau. Identitasnya mengambil inspirasi visual dari warisan Jawa.

Sosok dewi penjaga menyangga bentuk datacenter di bawah gelombang air. Simbol ini menyampaikan tanggung jawab untuk menjaga pengetahuan dan infrastruktur yang menopangnya.

Makna tersebut diterjemahkan dalam cara proyek dikembangkan: pertanyaan yang jelas, pengujian yang terarah, dan komunikasi yang jujur tentang hasil serta keterbatasannya.

**Catatan editorial:** cerita nama mengikuti penjelasan pendiri, bukan klaim verifikasi etimologi atau penggambaran dewi tertentu dalam sejarah.

### A03: Prinsip pengembangan

**Teks publik**

- **Bukti sebelum skala.** Keputusan pengembangan mengikuti hasil evaluasi.
- **Tanggung jawab sepanjang umur fasilitas.** Perencanaan mencakup pemasangan, operasi, pemulihan, serta akhir masa pakai.
- **Kolaborasi dengan peran yang jelas.** Kontribusi, antarmuka, dan tanggung jawab disepakati sejak awal.
- **Keterbukaan yang proporsional.** Informasi publik menjelaskan dasar proyek; pembahasan terperinci mengikuti kebutuhan dan kewenangan akses.

### A04: Tim dan organisasi

**Template editorial - jangan publikasikan kartu kosong:**

- Nama: `[KONFIRMASI: nama lengkap]`.
- Peran aktual: `[KONFIRMASI: jabatan atau tanggung jawab]`.
- Pengalaman relevan: `[KONFIRMASI: ringkasan yang dapat diverifikasi]`.
- Profil profesional: `[KONFIRMASI: tautan yang boleh dipublikasikan]`.
- Badan usaha atau penanggung jawab proyek: `[KONFIRMASI: nama dan status]`.
- Kontak publik: `[KONFIRMASI: email yang dipantau]`.

Jangan menjadikan pengalaman pribadi di organisasi lain sebagai dukungan resmi organisasi tersebut. Tampilkan mitra/advisor hanya setelah status dan izin penyebutannya jelas.

**CTA:** Kenali Peluang Kolaborasi → `/id/kemitraan/`

## 09. FAQ publik

Letakkan pada halaman Validasi atau bagian bawah Teknologi; tidak perlu menu baru.

### F01: Apakah Jalaranu sudah beroperasi secara komersial?

Website ini memperkenalkan konsep dan peluang pengembangan Jalaranu. Ketersediaan layanan komersial akan disampaikan secara terpisah setelah kesiapan fasilitas dan layanannya dikonfirmasi.

### F02: Mengapa menggunakan danau?

Danau merupakan konteks penempatan yang sedang dieksplorasi. Kesesuaiannya perlu dinilai berdasarkan kondisi perairan, akses, energi, jaringan, lingkungan, dan kebutuhan penggunaan. Pemilihan danau tidak dengan sendirinya membuktikan keunggulan terhadap lokasi atau desain lain.

### F03: Apakah pendinginannya gratis atau tanpa energi?

Potensi pemanfaatan lingkungan perairan harus dinilai bersama sistem perpindahan panas dan kebutuhan energi seluruh fasilitas. Jalaranu belum menyatakan penghematan tertentu tanpa hasil pengukuran dan pembanding yang jelas.

### F04: Bagaimana jika modul memerlukan perbaikan?

Kemampuan pemantauan, penanganan gangguan, pengambilan kembali, dan penggantian komponen merupakan bagian dari evaluasi desain. Prosedur rinci akan mengikuti rancangan yang telah diuji serta kebutuhan layanan yang disepakati.

### F05: Apakah dapat digunakan untuk data sensitif atau kebutuhan pertahanan?

Kesesuaian penggunaan perlu dievaluasi berdasarkan klasifikasi data, arsitektur sistem, kontrol akses, tata kelola, dan persyaratan institusi terkait. Website ini tidak menyatakan persetujuan atau kesiapan untuk menangani informasi dengan klasifikasi tertentu.

### F06: Bagaimana dampak terhadap danau dinilai?

Pendekatan kajian mencakup kondisi awal, perubahan yang perlu dipantau, serta evaluasi selama pengujian dan pada akhir masa pakai. Ruang lingkupnya harus disesuaikan dengan lokasi dan kegiatan yang direncanakan.

### F07: Bagaimana memperoleh informasi lebih lanjut?

Gunakan formulir kemitraan untuk menjelaskan organisasi dan tujuan diskusi. Informasi yang dapat dibagikan akan ditentukan berdasarkan kebutuhan pembahasan dan ketersediaan dokumen.

## 10. Footer dan metadata

**Teks footer publik:**

Jalaranu - pengembangan konsep datacenter bawah danau untuk ketahanan digital Indonesia.

Teknologi · Validasi · Kemitraan · Tentang · Privasi · Kontak

**Label logo:** Jalaranu.  
**Alt ilustrasi utama:** Ilustrasi konsep Jalaranu: modul datacenter di bawah permukaan danau yang terhubung ke fasilitas pendukung di darat.  
**Alt simbol bila informatif:** Simbol Jalaranu berupa dewi penjaga yang menyangga datacenter berbentuk limas terpancung di bawah gelombang air.  
**Catatan:** pada logo yang sudah memiliki label tautan Jalaranu, hindari pembacaan berulang oleh pembaca layar. Hak cipta dan identitas pengelola menggunakan `[KONFIRMASI: entitas dan tahun yang sesuai]`.

| Halaman | Judul SEO | Deskripsi meta |
|---|---|---|
| Beranda | Jalaranu: Konsep Datacenter Bawah Danau | Jelajahi konsep datacenter bawah danau Jalaranu, pendekatan validasi, dan peluang kemitraan untuk pengembangan infrastruktur komputasi di Indonesia. |
| Teknologi | Teknologi Datacenter Bawah Danau: Jalaranu | Pelajari konsep sistem Jalaranu, dari fasilitas darat dan modul komputasi hingga pengelolaan panas, konektivitas, serta pemulihan. |
| Validasi | Validasi Teknis, Ekonomi, dan Lingkungan: Jalaranu | Kenali pertanyaan pengujian dan pendekatan evaluasi Jalaranu untuk menilai kelayakan datacenter bawah danau secara bertahap. |
| Kemitraan | Kemitraan Pengembangan Datacenter: Jalaranu | Jajaki kerja sama bersama Jalaranu sebagai investor, institusi pemerintah atau pertahanan, mitra industri, maupun mitra riset. |
| Tentang | Tentang Jalaranu: Identitas dan Pengembangan | Kenali Jalaranu, cerita identitasnya, prinsip pengembangan, dan pihak yang bertanggung jawab atas proyek datacenter bawah danau. |

## 11. Catatan pelaksanaan dan pemeriksaan sebelum terbit

Bagian ini hanya untuk tim konten/desain/pengembangan.

- Gunakan satu H1 per halaman. Heading dalam draft menunjukkan hierarki konten; label H01, T01, dan seterusnya adalah ID internal, bukan judul publik.
- Buat anchor `sistem`, `investor`, `institusi`, `industri`, `riset`, dan `kontak` secara eksplisit pada implementasi; notasi `{#...}` di dokumen ini adalah petunjuk, bukan teks tampil.
- Pilihan bahasa mempertahankan halaman dan konteks. Gunakan pasangan URL ID/EN serta metadata bahasa yang sesuai.
- Tidak ada video otomatis, pop-up permintaan kontak saat pertama masuk, statistik animasi tanpa data, atau indikator status operasional palsu.
- Publikasikan diagram yang cukup menjelaskan sistem, tanpa memuat koordinat fasilitas atau rincian keamanan yang tidak perlu untuk pembahasan publik.
- Halaman Privasi adalah kebutuhan pendukung peluncuran formulir, bukan draft hukum siap pakai. Isinya harus sesuai pengelola, tujuan penggunaan data, penyedia layanan, retensi, kanal permintaan pengguna, serta praktik aktual.
- Ukur hasil website lewat permintaan diskusi yang relevan dan pertemuan lanjutan. Jika analitik digunakan, tetapkan pengelolaan data yang sesuai dan jangan mengirim isi formulir ke analitik.
- Setiap angka wajib mempunyai sumber, tanggal, lingkup, satuan, serta status target/simulasi/pengukuran. Tampilkan konteks pengujian di dekat hasil.
- Prioritas sebelum terbit: konfirmasi tahap proyek; identitas penanggung jawab; email aktif; tim yang boleh disebut; status dokumen; gambar berlabel konsep; alur formulir; dan pemberitahuan privasi.

### Referensi editorial opsional

Referensi berikut dapat membantu tim menyusun materi Validasi; bukan bukti kinerja Jalaranu atau pernyataan hubungan kemitraan. Periksa kembali sebelum mengutip dalam publikasi.

- Microsoft Research, Project Natick: https://www.microsoft.com/en-us/research/project/natick/ - contoh penyajian proyek riset bawah air dan hasil dengan lingkup eksperimen tertentu. Jangan memindahkan hasilnya ke konteks danau atau Jalaranu tanpa pengujian.
- Uptime Institute, Tier Certification: https://uptimeinstitute.com/tier-certification - rujukan untuk membedakan status desain, fasilitas, dan operasi ketika membahas sertifikasi. Tidak menyatakan bahwa Jalaranu telah tersertifikasi.
