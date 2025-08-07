import React from 'react';
import { Shield, Users, Scale, Heart, Award, Calendar, MapPin, Phone, Mail, Clock } from 'lucide-react';

const AboutPage = () => {
  const milestones = [
    { year: '2001', event: 'დაიწყო აქტიური ქმედებები მსხვერპლთა დასაცავად მთელი საქართველოს მასშტაბით' },
    { year: '2003', event: 'შეიქმნა ძალადობისგან დაცვის ეროვნული ქსელი და გაიხსნა პირველი თავშესაფარი' },
    { year: '2006', event: 'მიღებულ იქნა "ოჯახში ძალადობის პრევენციის" კანონი, რომლის თანაავტორია ძდექ-ი' },
    { year: '2015', event: 'გაიხსნა საქართველოში პირველი კრიზისული ცენტრი გურჯაანში' },
    { year: '2016', event: 'გაფორმდა უზუფრუქტის ხელშეკრულება თავშესაფრის შენობაზე' },
    { year: '2017', event: 'შეიქმნა სოციალური საწარმო "გემომეტრია"' },
    { year: '2023', event: 'დაიწყო ENPARD პროექტი იმერეთსა და კახეთში' }
  ];

  const achievements = [
    { number: '1125+', label: 'ქალი და ბავშვი მიიღო დახმარება' },
    { number: '24', label: 'კანონში შევიდა ცვლილება' },
    { number: '3500+', label: 'პოლიციელი გადამზადდა' },
    { number: '211', label: 'ბენეფიციარმა გაიარა კულინარიის კურსი' }
  ];

  const services = [
    {
      icon: <Scale className="w-8 h-8" />,
      title: 'სამართლებრივი დახმარება',
      description: 'უფასო იურიდიული კონსულტაციები და სასამართლო წარმომადგენლობა'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'ფსიქო-სოციალური მხარდაჭერა',
      description: 'ფსიქოლოგის და სოციალური მუშაკის პროფესიული დახმარება'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'თავშესაფარი',
      description: 'უსაფრთხო საცხოვრებელი და 24-საათიანი მომსახურება'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'რეაბილიტაციის პროგრამები',
      description: 'მოძალადეთა ქცევის კორექციის და სარეაბილიტაციო პროგრამები'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">ძდექ</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">მთავარი</a>
              <a href="/about" className="text-blue-600 font-medium">ჩვენს შესახებ</a>
              <a href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">სერვისები</a>
              <a href="/portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">პორტფოლიო</a>
              <a href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">ბლოგი</a>
              <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">კონტაქტი</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ჩვენს შესახებ
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              ძალადობისგან დაცვის ეროვნული ქსელი - 23 წელია ვმუშაობთ 
              არაძალადობრივი საზოგადოების ჩამოყალიბების ხელშეწყობაზე
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                ჩვენი მისია და ხედვა
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  ძალადობისგან დაცვის ეროვნული ქსელი (ძდექ-ი) არის არასამთავრობო ორგანიზაცია, 
                  რომლის მისიაა ქვეყანაში არაძალადობრივი საზოგადოების ჩამოყალიბების ხელშეწყობა.
                </p>
                <p className="mb-6">
                  ორგანიზაციის დაფუძნებას წინ უძღოდა მსხვერპლთა დასაცავად მთელი საქართველოს 
                  მასშტაბით 2001 წლიდან დაწყებული აქტიური ქმედებები. ამ მოძრაობას საფუძველი 
                  ჩაუყარა „ფონდ ღია საზოგადოება-საქართველოს" ქალთა პროგრამამ.
                </p>
                <p>
                  დღეს ძდექ-ი აერთიანებს 10 კომიტეტს და 5 ქვეკომიტეტს მთელი საქართველოს 
                  მასშტაბით და უკვე 23 წელია აქტიურად მუშაობს ოჯახში და ქალთა მიმართ 
                  ძალადობის დაძლევის მიზნით.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">ჩვენი მიღწევები</h3>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Logos Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ჩვენი პარტნიორები
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {/* Placeholder for partner logos */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-200 h-16 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">Logo {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legislative Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              კანონშემოქმედებითი საქმიანობა
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ძდექ-ი არის "ოჯახში ძალადობის პრევენციის, ოჯახში ძალადობის მსხვერპლთა 
              დაცვისა და დახმარების შესახებ" კანონის თანაავტორი
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">5 საკანონმდებლო პაკეტი</h3>
                <p className="text-gray-600">შემუშავებული და მიღებული პარლამენტის მიერ</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">24 კანონში ცვლილება</h3>
                <p className="text-gray-600">გაუმჯობესებული სამართლებრივი გარემო</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">მსხვერპლთა დაცვა</h3>
                <p className="text-gray-600">გაზრდილი დაცულობის ხარისხი</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shelter Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                თავშესაფარი და კრიზისული ცენტრი
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  AVNG-მ 2003 წელს გახსნა საქართველოში ქალთა მიმართ და ოჯახში ძალადობის 
                  მსხვერპლთათვის პირველი თავშესაფარი, რომელიც ღიაა ყველასთვის, ვის 
                  სიცოცხლეს და ჯანმრთელობას საფრთხე ემუქრება.
                </p>
                <p className="mb-6">
                  2015 წელს გურჯაანის მუნიციპალიტეტის ბაზაზე საქართველოში პირველი 
                  კრიზისული ცენტრი ამოქმედდა, რომელიც მნიშვნელოვან როლს ასრულებს 
                  რეგიონში ძალადობის მსხვერპლთა დაცვისა და დახმარების საქმეში.
                </p>
                <p>
                  თავშესაფარი შეუძლია ერთდროულად 20 ბენეფიციარს მოემსახუროს და 
                  გაუწიოს სამართლებრივი და ფსიქო-სოციალური მომსახურება.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <div className="text-blue-600 mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Enterprise Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              სოციალური საწარმო "გემომეტრია"
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              საქართველოში პირველი სოციალური საწარმო, რომელიც 2017 წელს შეიქმნა 
              ძალადობაგამოვლილი ქალებისა და გოგონების ეკონომიკური გაძლიერების მიზნით
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  ეკონომიკური გაძლიერების პროგრამა
                </h3>
                <p className="text-gray-600 mb-6">
                  "გემომეტრია" აძლევს ძალადობის მსხვერპლებს პროფესიულ განათლებას, 
                  შესაძლებლობას ისწავლონ, აიმაღლონ თვითშეფასება და გაძლიერდნენ, 
                  რაც ეხმარება მათ დამოუკიდებლობის მოპოვებაში.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">კულინარიისა და საკონდიტრო საქმის სწავლება</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">პროფესიული განვითარება და დასაქმება</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">ეკონომიკური დამოუკიდებლობის მიღწევა</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">შედეგები</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">გადამზადებული ბენეფიციარები</span>
                    <span className="text-2xl font-bold text-green-600">211</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">დასაქმების მაჩვენებელი</span>
                    <span className="text-2xl font-bold text-green-600">95%+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ჩვენი ღიარებები
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {/* Placeholder for award logos */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-100 h-20 rounded-lg flex items-center justify-center">
                <Award className="w-8 h-8 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ჩვენი გუნდი
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ძდექ-ში მუშაობენ ადამიანები, რომლებსაც გავლილი აქვთ არაერთი საერთაშორისო 
              ტრენინგი და აღჭურვილნი არიან ძალადობის მსხვერპლებთან მუშაობის უახლესი 
              მეთოდოლოგიით და უნარებით
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team member placeholders */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">გუნდის წევრი {i}</h3>
                <p className="text-gray-600 mb-4">პოზიცია</p>
                <p className="text-sm text-gray-500">
                  გამოცდილი სპეციალისტი ძალადობის მსხვერპლებთან მუშაობის სფეროში
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ჩვენი ისტორია
            </h2>
            <p className="text-xl text-gray-600">
              23 წლიანი გზა ძალადობის წინააღმდეგ ბრძოლაში
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <Calendar className="w-5 h-5 text-blue-600" />
                        <span className="text-lg font-bold text-blue-600">{milestone.year}</span>
                      </div>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">დაგვიკავშირდით</h2>
            <p className="text-xl text-gray-300">
              ჩვენ ყოველთვის მზად ვართ დაგეხმაროთ
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">მისამართი</h3>
              <p className="text-gray-300">თბილისი, საქართველო</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">ცხელი ხაზი</h3>
              <p className="text-gray-300">24/7 ხელმისაწვდომი</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">სამუშაო საათები</h3>
              <p className="text-gray-300">ორშაბათი - პარასკევი: 10:00 - 17:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">ძდექ</span>
              </div>
              <p className="text-gray-300">
                ძალადობისგან დაცვის ეროვნული ქსელი - 
                არაძალადობრივი საზოგადოების ხელშეწყობა
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">სერვისები</h4>
              <ul className="space-y-2 text-gray-300">
                <li>სამართლებრივი დახმარება</li>
                <li>ფსიქოლოგიური მხარდაჭერა</li>
                <li>თავშესაფარი</li>
                <li>სოციალური მუშაკის მომსახურება</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">პროგრამები</h4>
              <ul className="space-y-2 text-gray-300">
                <li>სარეაბილიტაციო პროგრამები</li>
                <li>ეკონომიკური გაძლიერება</li>
                <li>კანონშემოქმედებითი საქმიანობა</li>
                <li>ცნობიერების ამაღლება</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">კონტაქტი</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>ცხელი ხაზი</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@avng.ge</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>თბილისი, საქართველო</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ძალადობისგან დაცვის ეროვნული ქსელი. ყველა უფლება დაცულია.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;