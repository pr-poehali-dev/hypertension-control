import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const [age, setAge] = useState('');
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [recommendations, setRecommendations] = useState<string[]>([]);

  const calculateRecommendations = () => {
    const newRecommendations: string[] = [];
    const sys = parseInt(systolic);
    const dias = parseInt(diastolic);

    if (sys >= 140 || dias >= 90) {
      newRecommendations.push('Ограничьте потребление соли до 5г в день');
      newRecommendations.push('Регулярные физические нагрузки 30 минут 5 раз в неделю');
      newRecommendations.push('Контролируйте вес, ИМТ должен быть 18.5-24.9');
      newRecommendations.push('Ограничьте алкоголь и откажитесь от курения');
      newRecommendations.push('Включите в рацион овощи, фрукты, цельнозерновые продукты');
      newRecommendations.push('Регулярный мониторинг артериального давления');
    } else if (sys >= 130 || dias >= 85) {
      newRecommendations.push('Уменьшите потребление соли и жирной пищи');
      newRecommendations.push('Добавьте умеренные физические нагрузки');
      newRecommendations.push('Контролируйте стресс, практикуйте релаксацию');
      newRecommendations.push('Увеличьте потребление калия (бананы, шпинат)');
    } else {
      newRecommendations.push('Поддерживайте здоровый образ жизни');
      newRecommendations.push('Сбалансированное питание богатое овощами и фруктами');
      newRecommendations.push('Регулярная физическая активность');
      newRecommendations.push('Ежегодная проверка артериального давления');
    }

    setRecommendations(newRecommendations);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="bg-white border-b sticky top-0 z-50 backdrop-blur-sm bg-white/90">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Activity" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-secondary">Гипертензия.инфо</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#definition" className="text-foreground hover:text-primary transition-colors">Определение</a>
              <a href="#causes" className="text-foreground hover:text-primary transition-colors">Причины</a>
              <a href="#symptoms" className="text-foreground hover:text-primary transition-colors">Симптомы</a>
              <a href="#prevention" className="text-foreground hover:text-primary transition-colors">Профилактика</a>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 text-primary border-primary">Научно обоснованная информация</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
              Артериальная гипертензия
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Профессиональный медицинский портал с персонализированными рекомендациями по контролю артериального давления
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="hover-scale border-l-4 border-l-primary">
              <CardHeader>
                <Icon name="Users" className="text-primary mb-2" size={40} />
                <CardTitle className="text-2xl">1.28 млрд</CardTitle>
                <CardDescription>людей в мире страдают от гипертензии</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-scale border-l-4 border-l-accent">
              <CardHeader>
                <Icon name="TrendingDown" className="text-accent mb-2" size={40} />
                <CardTitle className="text-2xl">46%</CardTitle>
                <CardDescription>не знают о своем диагнозе</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover-scale border-l-4 border-l-destructive">
              <CardHeader>
                <Icon name="AlertCircle" className="text-destructive mb-2" size={40} />
                <CardTitle className="text-2xl">Фактор риска №1</CardTitle>
                <CardDescription>сердечно-сосудистых заболеваний</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="definition" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center text-secondary">Что такое артериальная гипертензия?</h2>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="BookOpen" className="text-primary" />
                Медицинское определение
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg leading-relaxed">
              <p>
                Артериальная гипертензия (гипертония) — это хроническое состояние, при котором артериальное давление в артериях постоянно повышено.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-primary">
                <p className="font-semibold mb-2">Критерии диагностики (ВОЗ):</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-primary mt-1" size={20} />
                    <span><strong>Нормальное:</strong> систолическое {'<'} 120 и диастолическое {'<'} 80 мм рт.ст.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="AlertTriangle" className="text-yellow-600 mt-1" size={20} />
                    <span><strong>Повышенное:</strong> систолическое 120-129 и диастолическое {'<'} 80 мм рт.ст.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="AlertCircle" className="text-destructive mt-1" size={20} />
                    <span><strong>Гипертензия 1 степени:</strong> систолическое 130-139 или диастолическое 80-89 мм рт.ст.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="XCircle" className="text-destructive mt-1" size={20} />
                    <span><strong>Гипертензия 2 степени:</strong> систолическое ≥ 140 или диастолическое ≥ 90 мм рт.ст.</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="causes" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center text-secondary">Причины гипертензии</h2>
          <Tabs defaultValue="primary" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="primary">Первичная (эссенциальная)</TabsTrigger>
              <TabsTrigger value="secondary">Вторичная</TabsTrigger>
            </TabsList>
            <TabsContent value="primary">
              <Card>
                <CardHeader>
                  <CardTitle>Первичная гипертензия (90-95% случаев)</CardTitle>
                  <CardDescription>Развивается без явной причины, связана с множественными факторами</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Dna" className="text-accent mt-1" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1">Генетическая предрасположенность</h4>
                        <p className="text-sm text-muted-foreground">Наследственные факторы играют важную роль</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Cake" className="text-accent mt-1" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1">Возраст</h4>
                        <p className="text-sm text-muted-foreground">Риск увеличивается после 45 лет у мужчин, 55 лет у женщин</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Salad" className="text-accent mt-1" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1">Избыток соли в рационе</h4>
                        <p className="text-sm text-muted-foreground">Более 5г натрия в день повышает риск</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Weight" className="text-accent mt-1" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1">Избыточный вес</h4>
                        <p className="text-sm text-muted-foreground">Каждые 10 кг лишнего веса повышают давление на 2-3 мм рт.ст.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Cigarette" className="text-accent mt-1" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1">Курение и алкоголь</h4>
                        <p className="text-sm text-muted-foreground">Повреждают сосуды и повышают давление</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Zap" className="text-accent mt-1" size={24} />
                      <div>
                        <h4 className="font-semibold mb-1">Хронический стресс</h4>
                        <p className="text-sm text-muted-foreground">Постоянная активация симпатической нервной системы</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="secondary">
              <Card>
                <CardHeader>
                  <CardTitle>Вторичная гипертензия (5-10% случаев)</CardTitle>
                  <CardDescription>Вызвана конкретными заболеваниями или состояниями</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="kidney">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Icon name="Stethoscope" className="text-primary" size={20} />
                          Заболевания почек
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        Хроническая почечная недостаточность, поликистоз почек, реноваскулярная гипертензия. Почки регулируют объем жидкости и выработку ренина.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="endocrine">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Icon name="Pill" className="text-primary" size={20} />
                          Эндокринные нарушения
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        Синдром Кушинга, феохромоцитома, гипертиреоз, первичный альдостеронизм. Избыток гормонов повышает артериальное давление.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="sleep">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Icon name="Moon" className="text-primary" size={20} />
                          Апноэ во сне
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        Обструктивное апноэ вызывает кислородное голодание и активацию симпатической нервной системы, что повышает давление.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="drugs">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Icon name="Tablets" className="text-primary" size={20} />
                          Лекарственные препараты
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        НПВС, оральные контрацептивы, деконгестанты, антидепрессанты, кортикостероиды могут повышать артериальное давление.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="symptoms" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center text-secondary">Симптомы и признаки</h2>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="AlertTriangle" className="text-destructive" />
                «Тихий убийца»
              </CardTitle>
              <CardDescription>
                Гипертензию часто называют «тихим убийцей», потому что она может годами протекать бессимптомно
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Ранние симптомы (часто отсутствуют):</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" className="text-primary mt-1" size={12} />
                      <span>Головная боль (особенно утром, в затылке)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" className="text-primary mt-1" size={12} />
                      <span>Головокружение</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" className="text-primary mt-1" size={12} />
                      <span>Шум в ушах</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Circle" className="text-primary mt-1" size={12} />
                      <span>Повышенная утомляемость</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-lg text-destructive">Тревожные симптомы:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Icon name="AlertCircle" className="text-destructive mt-1" size={16} />
                      <span>Сильная головная боль</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="AlertCircle" className="text-destructive mt-1" size={16} />
                      <span>Боль в груди</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="AlertCircle" className="text-destructive mt-1" size={16} />
                      <span>Одышка</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="AlertCircle" className="text-destructive mt-1" size={16} />
                      <span>Нарушение зрения</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="AlertCircle" className="text-destructive mt-1" size={16} />
                      <span>Носовые кровотечения</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-destructive/10 rounded-lg border-l-4 border-destructive">
                <p className="font-semibold text-destructive">⚠️ При появлении тревожных симптомов немедленно обратитесь к врачу!</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="prevention" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center text-secondary">Профилактика гипертензии</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="hover-scale">
              <CardHeader>
                <Icon name="Apple" className="text-primary mb-2" size={40} />
                <CardTitle>Питание</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>Ограничьте соль до 5г/день</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>Ешьте больше овощей и фруктов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>Выбирайте цельнозерновые продукты</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>Уменьшите насыщенные жиры</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <Icon name="Dumbbell" className="text-accent mb-2" size={40} />
                <CardTitle>Физическая активность</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={16} />
                    <span>30 минут умеренной нагрузки 5 раз в неделю</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={16} />
                    <span>Ходьба, плавание, велосипед</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={16} />
                    <span>Силовые тренировки 2 раза в неделю</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={16} />
                    <span>Избегайте длительного сидения</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <Icon name="Scale" className="text-primary mb-2" size={40} />
                <CardTitle>Контроль веса</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>ИМТ 18.5-24.9 кг/м²</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>Окружность талии: {'<'}94см (М), {'<'}80см (Ж)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1" size={16} />
                    <span>Постепенное снижение веса 0.5-1 кг/неделю</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <Icon name="HeartPulse" className="text-accent mb-2" size={40} />
                <CardTitle>Образ жизни</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={16} />
                    <span>Откажитесь от курения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={16} />
                    <span>Ограничьте алкоголь</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={16} />
                    <span>Управляйте стрессом</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={16} />
                    <span>Здоровый сон 7-9 часов</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center text-secondary">Персональные рекомендации</h2>
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Calculator" className="text-primary" />
                Получите рекомендации на основе ваших показателей
              </CardTitle>
              <CardDescription>Введите данные для персонализированных советов по образу жизни и питанию</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div>
                  <Label htmlFor="age">Возраст (лет)</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="30"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="systolic">Систолическое (мм рт.ст.)</Label>
                  <Input
                    id="systolic"
                    type="number"
                    placeholder="120"
                    value={systolic}
                    onChange={(e) => setSystolic(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="diastolic">Диастолическое (мм рт.ст.)</Label>
                  <Input
                    id="diastolic"
                    type="number"
                    placeholder="80"
                    value={diastolic}
                    onChange={(e) => setDiastolic(e.target.value)}
                  />
                </div>
              </div>
              <Button 
                onClick={calculateRecommendations} 
                className="w-full mb-6"
                disabled={!age || !systolic || !diastolic}
              >
                <Icon name="Sparkles" className="mr-2" size={20} />
                Получить рекомендации
              </Button>

              {recommendations.length > 0 && (
                <div className="animate-fade-in">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Icon name="FileCheck" className="text-primary" />
                    Ваши персональные рекомендации:
                  </h3>
                  <div className="space-y-3">
                    {recommendations.map((rec, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                        <Icon name="CheckCircle2" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                        <p className="text-foreground">{rec}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                    <p className="text-sm text-muted-foreground">
                      <strong>Важно:</strong> Эти рекомендации носят информационный характер. Для точной диагностики и назначения лечения обратитесь к врачу-кардиологу.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Activity" size={28} />
                <h3 className="text-xl font-bold">Гипертензия.инфо</h3>
              </div>
              <p className="text-gray-300">
                Научно обоснованная информация о профилактике и лечении артериальной гипертензии
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#definition" className="hover:text-white transition-colors">Определение</a></li>
                <li><a href="#causes" className="hover:text-white transition-colors">Причины</a></li>
                <li><a href="#symptoms" className="hover:text-white transition-colors">Симптомы</a></li>
                <li><a href="#prevention" className="hover:text-white transition-colors">Профилактика</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>8-800-555-35-35</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@hypertension.info</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Гипертензия.инфо. Информация представлена в ознакомительных целях.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
