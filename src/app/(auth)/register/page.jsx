'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Heart, Mail, Lock, Eye, EyeOff, User, Phone, CreditCard, CheckCircle, XCircle } from 'lucide-react';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ nid: '', fullName: '', email: '', phone: '', password: '' });

  const getPasswordStrength = () => {
    const { password } = formData;
    if (!password) return { level: 0, text: '', color: '' };
    if (password.length < 6) return { level: 1, text: 'Weak', color: 'bg-red-500' };
    if (password.length < 10) return { level: 2, text: 'Medium', color: 'bg-yellow-500' };
    return { level: 3, text: 'Strong', color: 'bg-green-500' };
  };

  const passwordStrength = getPasswordStrength();
  const validationHints = [
    { text: 'At least 8 characters', valid: formData.password.length >= 8 },
    { text: 'Contains uppercase', valid: /[A-Z]/.test(formData.password) },
    { text: 'Contains number', valid: /\d/.test(formData.password) },
    { text: 'Special character', valid: /[!@#$%^&*]/.test(formData.password) }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float" />

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md relative z-10">
        <Link href="/" className="flex items-center justify-center space-x-2 mb-8">
          <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold bpan>
        </Link>

        <Card className="glass-card bo>
          <CardHeader className="text-
            <CardTitle className="text-2xl text-w
       ription>
          </CardHead
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm text-gl>
              <dve">
                <CreditCard className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input))} />
              </d
            </div>

            <div>
              <label className="block text-sm 
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input >
              </div>
            </div>

            <div>
              <label className="block te
              <div className="relative">
                <Mail />
                <Input type=")} />
              </div>
            </div>

            <div>
              <lab
              <div c
                <P" />
/>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Password</label>
              <div cla">
                <Lock classNa-400" />
                <Input type={showPassword ? 'text' : />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 -white">
                  {showPassword ? <EyeOff c/>}
                </button>
              </div>
              {formD && (
                <dmt-3">
2 mb-2">
                    <div classN
                 
                    </div>
                    <span className="tex>
                  </div>
                  <div">
                    {validatio> (
                      <div key={h.text} classNam
                        {h.valid ? <Check>}
     span>
        
                    ))}
            </div>
                </div>
              )}
            </d

            <Button className="w-full btn-premium text-white font-semibold py-3">Create Account</Button>

            <div className="relative">
              <Separator />

            </div>

            <
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.3z"/>
              </svg>
              Continue with Google
on>

            <p texxt-center="teclassName 
          ">
       ay-400m text-gr2 text-sd px- bg-car-1/2e-yanslattrlate-x-1/2 -p-1/2 -trans2 tote left-1/oluName="abs classpan <s        " />
     te/10whime="bg-sNarator clasepa          <S>
    ative"ame="rellassNiv c  <d          ton>

 </But           nt
ccou  Create A           
 -2">bold py-3 mtfont-semit-white remium texl btn-p-fulsName="wButton clas       <*/}
     ster Button     {/* Regi        

 </div>        
   )}        
      div>       </    
     </div>               ))}
                   </div>
                          </span>
{hint.text}-500'}>: 'text-gray-400' t-greenid ? 'tex{hint.valssName=<span cla                )}
                             00" />
   ext-gray-5 w-3 te="h-3ssNamle cla<XCirc                             ) : (
                    />
 en-400" ext-gre"h-3 w-3 tsName=clasckCircle Che           <          ? (
     id    {hint.val               ">
      t-xs gap-1 tex-center items"flexe=Namlass.text} civ key={hint   <d                => (
    int)ints.map((halidationH  {v           ">
       ols-2 gap-2-cd grid="grimediv classNa         <
             </div>   
           pan>   </s                h.text}
 ngtrdStresswo {pa                     400'}`}>
xt-red-w-400' : 'te-yello2 ? 'text= ==el trength.lev : passwordS0'een-40-gr? 'textvel === 3 th.lewordStreng-xs ${passextssName={`tla  <span c                   </div>
               />
     %` }}* 33.33}el ngth.levasswordStreh: `${pdt{ wityle={all`} snsition-r} trangth.colowordStre${pass={`h-full sNamelas     <div c               dden">
  hiw-overfloded-full 00 roun-gray-7h-1.5 bg-1 me="flexv classNa    <di               2 mb-2">
 er gap- items-centame="flex classN      <div          
  -3">assName="mt  <div cl           rd && (
   .passwoformData       {*/}
       Indicator rd Strength sswo    {/* Pa       v>

         </di
        tton>       </bu
         5" />}w-5 sName="h-asEye cl/> : <-5" e="h-5 wff classNamd ? <EyeOworhowPass    {s       >
                   
    on-colors"transiti-white exter:tray-400 hovxt-gt-3 top-3 tesolute righabassName="cl                d)}
  !showPassworsword(owPas> setShnClick={() =   o              ton"
 "but type=               ton
    <but             
        />      }))}
    value e.target.word:ss..p, pata(p => ({ .FormDa=> set={(e)  onChange        
         password}={formData.  value            "
    ssition-colortran00 ue-5us:border-blite foc text-whwhite/20er-bordite/5  pr-10 bg-whme="pl-10Na   class          rd"
      passwo="Create alaceholder         p       d'}
  'passwor: text'  'rd ?={showPasswoype         t         t
npu         <I      00" />
 -gray-4ext-5 w-5 ttop-3 hleft-3 "absolute sName=lasLock c    <      e">
      me="relativassNa  <div cl           bel>
 </la2">Passwordy-300 mb--sm text-grablock text"Name=ss<label cla           
   v>      <di*/}
      word Field  Pass   {/*         iv>

         </d
    </div>            
    />            lue }))}
  e.target.vahone:.p, p(p => ({ ..FormData) => sethange={(e        onC         hone}
 .p{formData  value=             
   "tion-colors0 transi50der-blue-e focus:bortext-whit-white/20 order5 bhite/l-10 bg-wame="p classN             "
    rhone number p"Enter your=eholdeac       pl          "tel"
      type=        Input
        <         
    ay-400" />xt-gr3 h-5 w-5 te left-3 top-ute="absolssName<Phone cla        
        tive">me="rela<div classNa           el>
   Number</labt -2">Contac-300 mbraytext-gsm k text-Name="bloc class <label      >
              <div      Field */}
Phone  {/*       
      </div>
       
    </div>     
             />       
    ue }))}arget.val.tl: e..p, emaia(p => ({ .Dat=> setFormge={(e)     onChan              il}
emaformData.={value                
  ion-colors"00 transitorder-blue-5:bwhite focus20 text-order-white/white/5 b