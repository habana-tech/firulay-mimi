<?php
namespace App\Controller;

use App\Entity\Region;
use App\Repository\RegionRepository;
use App\Repository\DynamicPageRepository;
use phpDocumentor\Reflection\Types\Array_;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\DestinationRepository;
use App\Repository\FilterTagRepository;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Error\LoaderError;

class TestController extends AbstractController
{

    /**
     * @Route("/test", name="test")
     */
    public function test()
    {
        
        $this->addFlash('info', "Whenever you need to, be sure to use margin utilities to keep things nice and ");
        $this->addFlash('warning', "Whenever you need to, be sure to use margin utilities to keep things nice and ");

        return new Response('hola');
    }

}