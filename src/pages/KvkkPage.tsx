import { useEffect } from 'react';

export default function KvkkPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              KİŞİSEL VERİLERİN KORUNMASI
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-4">
              KVKK Kapsamında Aydınlatma Metni
            </p>
            <div className="w-24 h-1 bg-amber-500 mx-auto" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700">

            <p className="mb-8 text-gray-600 leading-relaxed">
              İşbu Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK" veya "Kanun") ve ilgili mevzuat kapsamında, kişisel verilerinizin işlenmesine ilişkin olarak sizleri bilgilendirmek amacıyla hazırlanmıştır.
            </p>

            <Section title="1. VERİ SORUMLUSUNA İLİŞKİN BİLGİLER">
              <p>
                6698 sayılı KVKK kapsamında, kişisel verileriniz veri sorumlusu sıfatıyla; <strong>KARBAK METAL SANAYİ VE TİCARET A.Ş.</strong> tarafından işlenmektedir.
              </p>
              <ul className="list-none mt-3 space-y-1">
                <li><strong>Adres:</strong> Organize Sanayi Bölgesi Mahallesi 3. Cadde No: 4/1 Onikişubat / Kahramanmaraş</li>
                <li><strong>KEP Adresi:</strong> karbakmetal@hs01.kep.tr</li>
              </ul>
              <p className="mt-3">
                Şirket, kişisel verilerin işlenme amaçlarını ve vasıtalarını belirleyen ve veri kayıt sisteminin kurulmasından ve yönetilmesinden sorumlu veri sorumlusudur.
              </p>
            </Section>

            <Section title="2. İŞLENEN KİŞİSEL VERİLER">
              <p>
                Şirketimizle iletişim kurmanız, internet sitemizi ziyaret etmeniz, internet sitemizde yer alan formları kullanmanız, teklif veya numune talebinde bulunmanız ya da telefon aracılığıyla iletişime geçmeniz halinde, gerçekleştirilen işlemin niteliğine göre aşağıdaki kişisel veri kategorileri işlenebilmektedir:
              </p>
              <div className="mt-4 space-y-4">
                <DataCategory title="Kimlik Bilgileri">Ad Soyad</DataCategory>
                <DataCategory title="İletişim Bilgileri">Telefon numarası, e-posta adresi, iletişim bilgileri</DataCategory>
                <DataCategory title="İşlem Güvenliği Bilgileri">IP adresi, log kayıtları, internet sitesi kullanımına ilişkin teknik bilgiler, sistem ve işlem güvenliğine ilişkin kayıtlar</DataCategory>
                <DataCategory title="Müşteri İşlem Bilgileri">Talep ve başvuru bilgileri, teklif talebi, numune talebi, iletişim ve mesaj içerikleri, müşteri işlem ve talep kayıtları</DataCategory>
                <DataCategory title="Hukuki İşlem Bilgileri">Başvuru ve talep bilgileri, hukuki süreçlere ilişkin bilgi ve belgeler, uyuşmazlıklara ilişkin kayıtlar</DataCategory>
                <DataCategory title="Ses Kayıtları">
                  Telefon görüşmelerinin sesli olarak kaydedilmesi halinde; görüşmeye ilişkin ses kaydı, görüşme sırasında paylaşılan kişisel veriler, görüşme tarihi ve saati, ilgili telefon numarası ve çağrıya ilişkin teknik kayıtlar işlenebilmektedir.
                </DataCategory>
              </div>
              <p className="mt-4">İşlenen kişisel veri kategorileri, ilgili kişi ile gerçekleştirilen işlem ve kullanılan iletişim kanalına göre değişiklik gösterebilir.</p>
            </Section>

            <Section title="3. KİŞİSEL VERİLERİN TOPLANMA YÖNTEMİ">
              <p>Kişisel verileriniz, ilgili işleme faaliyetinin niteliğine göre;</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Şirketimizin internet sitesinde bulunan iletişim formları</li>
                <li>Teklif alma formları</li>
                <li>Numune talep formları</li>
                <li>Telefon görüşmeleri</li>
                <li>E-posta iletişimi</li>
                <li>Elektronik iletişim kanalları</li>
                <li>Çerezler ve benzeri teknolojiler</li>
                <li>Şirketimizle gerçekleştirilen yazılı, sözlü ve elektronik iletişimler</li>
                <li>Hukuki ve idari süreçler kapsamında oluşturulan veya Şirketimize iletilen bilgi ve belgeler</li>
              </ul>
              <p className="mt-3">
                aracılığıyla tamamen veya kısmen otomatik yollarla ya da veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan yollarla toplanabilmektedir.
              </p>
              <p className="mt-3">
                Kişisel verileriniz doğrudan sizden elde edilebileceği gibi, işlemin niteliğine göre yetkili kişi veya kurumlardan ya da hukuken geçerli diğer kaynaklardan da elde edilebilir.
              </p>
            </Section>

            <Section title="4. KİŞİSEL VERİLERİN İŞLENME AMAÇLARI">
              <p>Kişisel verileriniz, ilgili işleme faaliyetinin niteliğine göre aşağıdaki amaçlarla işlenebilmektedir:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Teklif taleplerinin alınması, değerlendirilmesi ve sonuçlandırılması</li>
                <li>Numune taleplerinin alınması ve karşılanması</li>
                <li>Müşteri ve potansiyel müşterilerden gelen taleplerin değerlendirilmesi</li>
                <li>Müşteri ilişkilerinin yürütülmesi</li>
                <li>Satış ve pazarlama süreçlerinin yürütülmesi</li>
                <li>Mal ve hizmet satış süreçlerinin yürütülmesi</li>
                <li>İletişim faaliyetlerinin yürütülmesi</li>
                <li>Telefon görüşmelerinin ve çağrı süreçlerinin yürütülmesi</li>
                <li>Talep ve şikâyetlerin alınması ve sonuçlandırılması</li>
                <li>Hizmet kalitesinin ve iletişim süreçlerinin geliştirilmesi</li>
                <li>Telefon görüşmelerinin gerektiğinde incelenebilmesi</li>
                <li>Olası uyuşmazlıklarda ilgili kayıtların incelenmesi ve delil olarak kullanılabilmesi</li>
                <li>Bilgi güvenliği süreçlerinin yürütülmesi</li>
                <li>İnternet sitesi ve bilgi sistemlerinin güvenliğinin sağlanması</li>
                <li>Sistem ve işlem güvenliğinin sağlanması</li>
                <li>Hukuki ve mali işlerin yürütülmesi</li>
                <li>Hukuki yükümlülüklerin yerine getirilmesi</li>
                <li>Yetkili kurum ve kuruluşlardan gelen taleplerin karşılanması</li>
                <li>Bir hakkın tesisi, kullanılması veya korunması</li>
                <li>Hukuki süreçlerin yürütülmesi ve takip edilmesi</li>
                <li>Şirketimizin ticari faaliyetlerinin yürütülmesi ve geliştirilmesi</li>
                <li>Kişisel veri güvenliğinin sağlanması</li>
                <li>Kayıtların ilgili mevzuatta öngörülen süreler boyunca muhafaza edilmesi</li>
              </ul>
              <p className="mt-3">Kişisel verileriniz, belirli, açık ve meşru amaçlar dışında işlenmez.</p>
            </Section>

            <Section title="5. KİŞİSEL VERİLERİN İŞLENMESİNİN HUKUKİ SEBEPLERİ">
              <p>Kişisel verileriniz, ilgili işleme faaliyetinin niteliğine göre KVKK'nın 5. maddesinde düzenlenen aşağıdaki hukuki sebeplerden bir veya birkaçı kapsamında işlenebilmektedir:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Kanunlarda açıkça öngörülmesi</li>
                <li>Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması</li>
                <li>Şirketimizin hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması</li>
                <li>Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması</li>
                <li>İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla Şirketimizin meşru menfaatleri için veri işlemenin zorunlu olması</li>
                <li>Kanunda öngörülen diğer kişisel veri işleme şartlarının somut işleme faaliyetine uygulanması</li>
                <li>Gerekli olduğu durumlarda ilgili kişinin açık rızasının bulunması</li>
              </ul>
              <p className="mt-3">
                Ancak işbu metin kapsamında sayılan hukuki sebeplerin tamamı her veri işleme faaliyeti bakımından aynı anda uygulanmaz. Her bir kişisel veri işleme faaliyeti, kendi amacı ve niteliğine uygun hukuki sebebe dayanılarak gerçekleştirilir. Aydınlatma yükümlülüğü, kişisel veri işleme faaliyetinin hukuki sebebinden bağımsız olarak yerine getirilir. Açık rıza gereken durumlarda açık rıza, aydınlatma metninden ayrı olarak ve ilgili kişiye ayrıca sunulur.
              </p>
            </Section>

            <Section title="6. TELEFON GÖRÜŞMELERİNİN SESLİ OLARAK KAYDEDİLMESİ">
              <p>
                Şirketimiz ile telefon aracılığıyla gerçekleştirilen görüşmeler, ilgili işleme faaliyetinin niteliğine göre sesli olarak kaydedilebilmektedir. Ses kayıtları;
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Telefon görüşmelerinin ve iletişim süreçlerinin yürütülmesi</li>
                <li>Taleplerin doğru şekilde değerlendirilmesi</li>
                <li>Görüşme içeriğinin gerektiğinde incelenebilmesi</li>
                <li>Hizmet ve iletişim süreçlerinin geliştirilmesi</li>
                <li>Olası uyuşmazlıklarda ilgili kayıtların incelenmesi</li>
                <li>Bir hakkın tesisi, kullanılması veya korunması</li>
                <li>Hukuki süreçlerde gerekli kayıtların muhafaza edilmesi</li>
              </ul>
              <p className="mt-3">
                amaçlarıyla işlenebilmektedir. Telefon görüşmelerine ilişkin ses kayıtlarının işlenmesinde, ilgili işleme faaliyetinin niteliğine göre KVKK'nın 5. maddesinde yer alan uygun hukuki işleme şartı esas alınır. Ses kayıtları, işleme amacıyla bağlantılı, sınırlı ve ölçülü olacak şekilde işlenir.
              </p>
              <p className="mt-3">
                Telefon görüşmelerinin kaydedildiği durumlarda, görüşmenin başlangıcında ilgili kişilere ayrıca sesli bilgilendirme yapılabilir ve ayrıntılı Aydınlatma Metni'ne Şirketimizin internet sitesi üzerinden erişim imkânı sağlanır.
              </p>
            </Section>

            <Section title="7. KİŞİSEL VERİLERİN AKTARILMASI">
              <p>
                Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi için gerekli olması halinde ve KVKK'nın 8. ve 9. maddelerinde öngörülen şartlara uygun olarak;
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Yetkili kamu kurum ve kuruluşlarına</li>
                <li>Yetkili idari makam ve mercilere</li>
                <li>Hukuken yetkili özel hukuk kişilerine</li>
                <li>Hukuki, mali, teknik ve benzeri alanlarda hizmet alınan danışman ve hizmet sağlayıcılara</li>
                <li>Şirketimizin faaliyetlerinin yürütülmesi için gerekli olan iş ortaklarına</li>
                <li>Tedarikçilere ve hizmet sağlayıcılara</li>
                <li>Hukuki süreçlerin yürütülmesi kapsamında avukatlara ve yetkili hukuk hizmet sağlayıcılarına</li>
              </ul>
              <p className="mt-3">ilgili aktarım amacıyla sınırlı olmak üzere aktarılabilmektedir. Aktarım yapılması halinde yalnızca aktarım amacı bakımından gerekli olan kişisel veriler aktarılır.</p>
            </Section>

            <Section title="8. KİŞİSEL VERİLERİN YURT DIŞINA AKTARILMASI">
              <p>
                Kişisel verilerinizin yurt dışına aktarılması söz konusu olduğunda, aktarım KVKK'nın 9. maddesinde düzenlenen yurt dışına veri aktarımına ilişkin şartlara uygun olarak gerçekleştirilir. Yurt dışına aktarımın söz konusu olduğu durumlarda, Kanunda öngörülen yeterlilik kararı, uygun güvenceler veya Kanunda öngörülen diğer aktarım şartlarından ilgili olana uyulur.
              </p>
              <p className="mt-3">
                Şirketimizin kullandığı elektronik sistemler, yazılımlar, bulut hizmetleri, e-posta hizmetleri veya diğer hizmet sağlayıcıların yurt dışında veri işleyip işlemediği ayrıca değerlendirilir.
              </p>
            </Section>

            <Section title="9. KİŞİSEL VERİLERİN SAKLANMA SÜRESİ">
              <p>Kişisel verileriniz;</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>İlgili mevzuatta öngörülen saklama süreleri</li>
                <li>İşleme amacının gerektirdiği süre</li>
                <li>Hukuki yükümlülükler</li>
                <li>Olası uyuşmazlıklara ilişkin zamanaşımı ve hak düşürücü süreler</li>
              </ul>
              <p className="mt-3">
                dikkate alınarak saklanır. İşleme amacının ortadan kalkması veya ilgili mevzuatta öngörülen saklama süresinin sona ermesi halinde kişisel verileriniz, KVKK ve ilgili mevzuata uygun olarak silinir, yok edilir veya anonim hale getirilir. Telefon görüşmelerine ilişkin ses kayıtlarının saklama süresi, Şirketimizin kişisel veri işleme envanteri ve kişisel veri saklama ve imha süreçleri kapsamında belirlenir.
              </p>
            </Section>

            <Section title="10. KİŞİSEL VERİLERİN GÜVENLİĞİ">
              <p>
                Şirketimiz, kişisel verilerin hukuka aykırı olarak işlenmesini ve erişilmesini önlemek, kişisel verilerin muhafazasını sağlamak ve kişisel verilerin güvenliğini temin etmek amacıyla gerekli teknik ve idari tedbirleri almaktadır. Bu kapsamda, işlenen kişisel verilerin niteliğine ve işleme faaliyetinin risklerine uygun olarak erişim yetkilendirmeleri, bilgi güvenliği tedbirleri, sistem güvenliği önlemleri, kayıt ve loglama mekanizmaları ve gerekli diğer teknik ve idari tedbirler uygulanabilir.
              </p>
              <p className="mt-3">Kişisel verilere erişim, görev ve yetki kapsamında gerekli kişilerle sınırlandırılır.</p>
            </Section>

            <Section title="11. KİŞİSEL VERİLERİN SİLİNMESİ, YOK EDİLMESİ VEYA ANONİM HALE GETİRİLMESİ">
              <p>
                Kişisel verilerin işlenmesini gerektiren şartların ortadan kalkması halinde, kişisel veriler KVKK ve ilgili mevzuata uygun şekilde silinir, yok edilir veya anonim hale getirilir. İmha süreçleri, Şirketimizin kişisel veri saklama ve imha süreçleri ile ilgili mevzuat doğrultusunda gerçekleştirilir.
              </p>
            </Section>

            <Section title="12. KİŞİSEL VERİ SAHİBİNİN HAKLARI">
              <p>KVKK'nın 11. maddesi kapsamında kişisel veri sahipleri, kişisel verileriyle ilgili olarak Kanunda düzenlenen haklarını kullanabilir. Bu kapsamda;</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Kişisel verilerinin işlenip işlenmediğini öğrenme</li>
                <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme</li>
                <li>Kişisel verilerin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</li>
                <li>Kişisel verilerin eksik veya yanlış işlenmiş olması halinde düzeltilmesini isteme</li>
                <li>KVKK'da öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme</li>
                <li>Yapılan düzeltme, silme veya yok etme işlemlerinin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
                <li>İşlenen kişisel verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişi aleyhine bir sonucun ortaya çıkmasına itiraz etme</li>
                <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması halinde zararın giderilmesini talep etme</li>
              </ul>
              <p className="mt-3">haklarına sahiptir.</p>
            </Section>

            <Section title="13. BAŞVURU YÖNTEMİ">
              <p>
                KVKK'nın 11. maddesinde düzenlenen haklarınızı kullanmak amacıyla taleplerinizi KVKK'nın 13. maddesi ve ilgili mevzuatta belirtilen usul ve esaslara uygun şekilde Şirketimize iletebilirsiniz.
              </p>
              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-5 space-y-3">
                <div>
                  <span className="font-semibold text-gray-800">KEP yoluyla:</span>
                  <a href="mailto:karbakmetal@hs01.kep.tr" className="ml-2 text-amber-700 hover:text-amber-800 font-medium">
                    karbakmetal@hs01.kep.tr
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-gray-800">Yazılı olarak:</span>
                  <p className="mt-1 text-gray-600">
                    KARBAK METAL SANAYİ VE TİCARET A.Ş.<br />
                    Organize Sanayi Bölgesi Mahallesi 3. Cadde No: 4/1<br />
                    Onikişubat / Kahramanmaraş
                  </p>
                </div>
              </div>
              <p className="mt-4">
                Başvurular, talebin niteliğine göre en kısa sürede ve en geç otuz gün içerisinde sonuçlandırılır. Başvurunun ayrıca bir maliyet gerektirmesi halinde KVKK ve ilgili mevzuatta öngörülen ücret talep edilebilir.
              </p>
            </Section>

            <Section title="14. YÜRÜRLÜK VE GÜNCELLEME">
              <p>
                İşbu Aydınlatma Metni, kişisel veri işleme faaliyetlerindeki, mevzuattaki veya Şirketimizin uygulamalarındaki değişikliklere bağlı olarak güncellenebilir. Güncellenen metin Şirketimizin internet sitesinde yayımlandığı tarihten itibaren geçerli olur.
              </p>
            </Section>

            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <p className="font-bold text-gray-900 text-lg">KARBAK METAL SANAYİ VE TİCARET A.Ş.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-amber-500">
        {title}
      </h2>
      <div className="text-gray-700 leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

function DataCategory({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <p className="font-semibold text-gray-800 mb-1">{title}</p>
      <p className="text-gray-600 text-sm">{children}</p>
    </div>
  );
}
